export enum Arch {
  Amd64 = 0,
  Arm64 = 1,
}

export enum OS {
  Darwin = 0,
  Linux = 1,
  Windows = 2,
}

function parseEnv(
  env: string,
): { arch?: Arch; os?: OS } | null {
  switch (env) {
    case "amd64":
      return { arch: Arch.Amd64 };
    case "arm64":
      return { arch: Arch.Arm64 };
    case "darwin":
      return { os: OS.Darwin };
    case "linux":
      return { os: OS.Linux };
    case "windows":
      return { os: OS.Windows };
    default:
      if (env.includes("/")) {
        const archAndOS = env.split("/")
          .map((i) => parseEnv(i))
          .filter(<T>(i: T | null): i is T => i !== null);
        return archAndOS.reduce(Object.assign, {});
      } else {
        // ignore unknown arch/os
        return null;
      }
  }
}

export function toMatrix(envs?: string[]): boolean[][] {
  if (!envs) {
    return [
      [true, true, true],
      [true, true, true],
    ];
  }
  let matrix = [
    [false, false, false],
    [false, false, false],
  ];
  for (const env of envs) {
    const { arch, os } = parseEnv(env) ?? {};
    matrix = matrix.map((arr, row) =>
      arr.map((value, col) =>
        value ||
        (arch === row && os === undefined) ||
        (arch === undefined && os === col) ||
        (arch === row && os === col)
      )
    );
  }
  return matrix;
}
