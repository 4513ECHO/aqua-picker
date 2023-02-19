export enum Arch {
  Amd64 = 0,
  Arm64 = 1,
}

export enum OS {
  Darwin = 0,
  Linux = 1,
  Windows = 2,
}

export interface Environment {
  arch?: Arch;
  os?: OS;
}

const converter: Record<string, Environment> = {
  amd64: { arch: Arch.Amd64 },
  arm64: { arch: Arch.Arm64 },
  darwin: { os: OS.Darwin },
  linux: { os: OS.Linux },
  windows: { os: OS.Windows },
};

function parseEnv(env: string): Environment {
  if (env.includes("/")) {
    return env.split("/").map(parseEnv).reduce(Object.assign, {});
  }
  return converter[env] ?? {};
}

export function toMatrix(envs?: string[]): boolean[][] {
  if (!envs) {
    return [Array(3).fill(true), Array(3).fill(true)];
  }
  let matrix = [Array(3).fill(false), Array(3).fill(false)];
  for (const env of envs) {
    const { arch, os } = parseEnv(env);
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
