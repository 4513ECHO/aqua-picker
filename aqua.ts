export interface Registry {
    packages: PackageElement[] | null;
}

export interface PackageElement {
    aliases?:              AliasElement[];
    asset?:                string;
    complete_windows_ext?: boolean;
    description?:          string;
    files?:                FileElement[];
    format?:               string;
    format_overrides?:     FormatOverrideElement[];
    link?:                 string;
    name?:                 string;
    overrides?:            OverrideElement[];
    path?:                 string;
    replacements?:         Replacements;
    repo_name?:            string;
    repo_owner?:           string;
    rosetta2?:             boolean;
    search_words?:         string[];
    supported_envs?:       SupportedEnvElement[];
    supported_if?:         string;
    type:                  PackageType;
    url?:                  string;
    version_constraint?:   string;
    version_filter?:       string;
    version_overrides?:    VersionOverrideElement[];
    version_source?:       VersionSource;
    windows_ext?:          string;
}

export interface AliasElement {
    name: string;
}

export interface FileElement {
    dir?:  string;
    name?: string;
    src?:  string;
}

export interface FormatOverrideElement {
    format: string;
    goos:   Goos;
}

export enum Goos {
    AIX = "aix",
    Android = "android",
    Darwin = "darwin",
    Dragonfly = "dragonfly",
    Freebsd = "freebsd",
    Illumos = "illumos",
    Ios = "ios",
    Linux = "linux",
    Netbsd = "netbsd",
    Openbsd = "openbsd",
    Plan9 = "plan9",
    Solaris = "solaris",
    Windows = "windows",
}

export interface OverrideElement {
    asset?:                string;
    complete_windows_ext?: boolean;
    files?:                FileElement[];
    format?:               string;
    goarch?:               Goarch;
    goos?:                 Goos;
    replacements?:         Replacements;
    url?:                  string;
    windows_ext?:          string;
}

export enum Goarch {
    Amd64 = "amd64",
    Arm = "arm",
    Arm64 = "arm64",
    MIPS = "mips",
    Mips64 = "mips64",
    Mips64LE = "mips64le",
    Mipsle = "mipsle",
    Ppc64 = "ppc64",
    Ppc64LE = "ppc64le",
    Riscv64 = "riscv64",
    S390X = "s390x",
    The386 = "386",
}

export interface Replacements {
    "386"?:     string;
    aix?:       string;
    amd64?:     string;
    android?:   string;
    arm?:       string;
    arm64?:     string;
    darwin?:    string;
    dragonfly?: string;
    freebsd?:   string;
    illumos?:   string;
    ios?:       string;
    linux?:     string;
    mips?:      string;
    mips64?:    string;
    mips64le?:  string;
    mipsle?:    string;
    netbsd?:    string;
    openbsd?:   string;
    plan9?:     string;
    ppc64?:     string;
    ppc64le?:   string;
    riscv64?:   string;
    s390x?:     string;
    solaris?:   string;
    windows?:   string;
}

export enum SupportedEnvElement {
    AIX = "aix",
    AIX386 = "aix/386",
    AIXAmd64 = "aix/amd64",
    AIXArm = "aix/arm",
    AIXArm64 = "aix/arm64",
    AIXMIPS = "aix/mips",
    AIXMips64 = "aix/mips64",
    AIXMips64LE = "aix/mips64le",
    AIXMipsle = "aix/mipsle",
    AIXPpc64 = "aix/ppc64",
    AIXPpc64LE = "aix/ppc64le",
    AIXRiscv64 = "aix/riscv64",
    AIXS390X = "aix/s390x",
    All = "all",
    Amd64 = "amd64",
    Android = "android",
    Android386 = "android/386",
    AndroidAmd64 = "android/amd64",
    AndroidArm = "android/arm",
    AndroidArm64 = "android/arm64",
    AndroidMIPS = "android/mips",
    AndroidMips64 = "android/mips64",
    AndroidMips64LE = "android/mips64le",
    AndroidMipsle = "android/mipsle",
    AndroidPpc64 = "android/ppc64",
    AndroidPpc64LE = "android/ppc64le",
    AndroidRiscv64 = "android/riscv64",
    AndroidS390X = "android/s390x",
    Arm = "arm",
    Arm64 = "arm64",
    Darwin = "darwin",
    Darwin386 = "darwin/386",
    DarwinAmd64 = "darwin/amd64",
    DarwinArm = "darwin/arm",
    DarwinArm64 = "darwin/arm64",
    DarwinMIPS = "darwin/mips",
    DarwinMips64 = "darwin/mips64",
    DarwinMips64LE = "darwin/mips64le",
    DarwinMipsle = "darwin/mipsle",
    DarwinPpc64 = "darwin/ppc64",
    DarwinPpc64LE = "darwin/ppc64le",
    DarwinRiscv64 = "darwin/riscv64",
    DarwinS390X = "darwin/s390x",
    Dragonfly = "dragonfly",
    Dragonfly386 = "dragonfly/386",
    DragonflyAmd64 = "dragonfly/amd64",
    DragonflyArm = "dragonfly/arm",
    DragonflyArm64 = "dragonfly/arm64",
    DragonflyMIPS = "dragonfly/mips",
    DragonflyMips64 = "dragonfly/mips64",
    DragonflyMips64LE = "dragonfly/mips64le",
    DragonflyMipsle = "dragonfly/mipsle",
    DragonflyPpc64 = "dragonfly/ppc64",
    DragonflyPpc64LE = "dragonfly/ppc64le",
    DragonflyRiscv64 = "dragonfly/riscv64",
    DragonflyS390X = "dragonfly/s390x",
    Freebsd = "freebsd",
    Freebsd386 = "freebsd/386",
    FreebsdAmd64 = "freebsd/amd64",
    FreebsdArm = "freebsd/arm",
    FreebsdArm64 = "freebsd/arm64",
    FreebsdMIPS = "freebsd/mips",
    FreebsdMips64 = "freebsd/mips64",
    FreebsdMips64LE = "freebsd/mips64le",
    FreebsdMipsle = "freebsd/mipsle",
    FreebsdPpc64 = "freebsd/ppc64",
    FreebsdPpc64LE = "freebsd/ppc64le",
    FreebsdRiscv64 = "freebsd/riscv64",
    FreebsdS390X = "freebsd/s390x",
    Illumos = "illumos",
    Illumos386 = "illumos/386",
    IllumosAmd64 = "illumos/amd64",
    IllumosArm = "illumos/arm",
    IllumosArm64 = "illumos/arm64",
    IllumosMIPS = "illumos/mips",
    IllumosMips64 = "illumos/mips64",
    IllumosMips64LE = "illumos/mips64le",
    IllumosMipsle = "illumos/mipsle",
    IllumosPpc64 = "illumos/ppc64",
    IllumosPpc64LE = "illumos/ppc64le",
    IllumosRiscv64 = "illumos/riscv64",
    IllumosS390X = "illumos/s390x",
    Ios = "ios",
    Ios386 = "ios/386",
    IosAmd64 = "ios/amd64",
    IosArm = "ios/arm",
    IosArm64 = "ios/arm64",
    IosMIPS = "ios/mips",
    IosMips64 = "ios/mips64",
    IosMips64LE = "ios/mips64le",
    IosMipsle = "ios/mipsle",
    IosPpc64 = "ios/ppc64",
    IosPpc64LE = "ios/ppc64le",
    IosRiscv64 = "ios/riscv64",
    IosS390X = "ios/s390x",
    Linux = "linux",
    Linux386 = "linux/386",
    LinuxAmd64 = "linux/amd64",
    LinuxArm = "linux/arm",
    LinuxArm64 = "linux/arm64",
    LinuxMIPS = "linux/mips",
    LinuxMips64 = "linux/mips64",
    LinuxMips64LE = "linux/mips64le",
    LinuxMipsle = "linux/mipsle",
    LinuxPpc64 = "linux/ppc64",
    LinuxPpc64LE = "linux/ppc64le",
    LinuxRiscv64 = "linux/riscv64",
    LinuxS390X = "linux/s390x",
    MIPS = "mips",
    Mips64 = "mips64",
    Mips64LE = "mips64le",
    Mipsle = "mipsle",
    Netbsd = "netbsd",
    Netbsd386 = "netbsd/386",
    NetbsdAmd64 = "netbsd/amd64",
    NetbsdArm = "netbsd/arm",
    NetbsdArm64 = "netbsd/arm64",
    NetbsdMIPS = "netbsd/mips",
    NetbsdMips64 = "netbsd/mips64",
    NetbsdMips64LE = "netbsd/mips64le",
    NetbsdMipsle = "netbsd/mipsle",
    NetbsdPpc64 = "netbsd/ppc64",
    NetbsdPpc64LE = "netbsd/ppc64le",
    NetbsdRiscv64 = "netbsd/riscv64",
    NetbsdS390X = "netbsd/s390x",
    Openbsd = "openbsd",
    Openbsd386 = "openbsd/386",
    OpenbsdAmd64 = "openbsd/amd64",
    OpenbsdArm = "openbsd/arm",
    OpenbsdArm64 = "openbsd/arm64",
    OpenbsdMIPS = "openbsd/mips",
    OpenbsdMips64 = "openbsd/mips64",
    OpenbsdMips64LE = "openbsd/mips64le",
    OpenbsdMipsle = "openbsd/mipsle",
    OpenbsdPpc64 = "openbsd/ppc64",
    OpenbsdPpc64LE = "openbsd/ppc64le",
    OpenbsdRiscv64 = "openbsd/riscv64",
    OpenbsdS390X = "openbsd/s390x",
    Plan9 = "plan9",
    Plan9386 = "plan9/386",
    Plan9Amd64 = "plan9/amd64",
    Plan9Arm = "plan9/arm",
    Plan9Arm64 = "plan9/arm64",
    Plan9MIPS = "plan9/mips",
    Plan9Mips64 = "plan9/mips64",
    Plan9Mips64LE = "plan9/mips64le",
    Plan9Mipsle = "plan9/mipsle",
    Plan9Ppc64 = "plan9/ppc64",
    Plan9Ppc64LE = "plan9/ppc64le",
    Plan9Riscv64 = "plan9/riscv64",
    Plan9S390X = "plan9/s390x",
    Ppc64 = "ppc64",
    Ppc64LE = "ppc64le",
    Riscv64 = "riscv64",
    S390X = "s390x",
    Solaris = "solaris",
    Solaris386 = "solaris/386",
    SolarisAmd64 = "solaris/amd64",
    SolarisArm = "solaris/arm",
    SolarisArm64 = "solaris/arm64",
    SolarisMIPS = "solaris/mips",
    SolarisMips64 = "solaris/mips64",
    SolarisMips64LE = "solaris/mips64le",
    SolarisMipsle = "solaris/mipsle",
    SolarisPpc64 = "solaris/ppc64",
    SolarisPpc64LE = "solaris/ppc64le",
    SolarisRiscv64 = "solaris/riscv64",
    SolarisS390X = "solaris/s390x",
    The386 = "386",
    Windows = "windows",
    Windows386 = "windows/386",
    WindowsAmd64 = "windows/amd64",
    WindowsArm = "windows/arm",
    WindowsArm64 = "windows/arm64",
    WindowsMIPS = "windows/mips",
    WindowsMips64 = "windows/mips64",
    WindowsMips64LE = "windows/mips64le",
    WindowsMipsle = "windows/mipsle",
    WindowsPpc64 = "windows/ppc64",
    WindowsPpc64LE = "windows/ppc64le",
    WindowsRiscv64 = "windows/riscv64",
    WindowsS390X = "windows/s390x",
}

export enum PackageType {
    GithubArchive = "github_archive",
    GithubContent = "github_content",
    GithubRelease = "github_release",
    Go = "go",
    GoInstall = "go_install",
    HTTP = "http",
}

export interface VersionOverrideElement {
    asset?:                string;
    complete_windows_ext?: boolean;
    files?:                FileElement[];
    format?:               string;
    format_overrides?:     FormatOverrideElement[];
    overrides?:            OverrideElement[];
    path?:                 string;
    replacements?:         Replacements;
    repo_name?:            string;
    repo_owner?:           string;
    rosetta2?:             boolean;
    supported_envs?:       SupportedEnvElement[];
    supported_if?:         string;
    type?:                 VersionOverrideType;
    url?:                  string;
    version_constraint?:   string;
    version_filter?:       string;
    version_source?:       string;
    windows_ext?:          string;
}

export enum VersionOverrideType {
    GithubArchive = "github_archive",
    GithubContent = "github_content",
    GithubRelease = "github_release",
    HTTP = "http",
}

export enum VersionSource {
    GithubTag = "github_tag",
}
