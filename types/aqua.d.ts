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

export type Goos = "aix" | "android" | "darwin" | "dragonfly" | "freebsd" | "illumos" | "ios" | "linux" | "netbsd" | "openbsd" | "plan9" | "solaris" | "windows";

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

export type Goarch = "386" | "amd64" | "arm" | "arm64" | "mips" | "mips64" | "mips64le" | "mipsle" | "ppc64" | "ppc64le" | "riscv64" | "s390x";

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

export type SupportedEnvElement = "all" | "aix" | "android" | "darwin" | "dragonfly" | "freebsd" | "illumos" | "ios" | "linux" | "netbsd" | "openbsd" | "plan9" | "solaris" | "windows" | "386" | "amd64" | "arm" | "arm64" | "mips" | "mips64" | "mips64le" | "mipsle" | "ppc64" | "ppc64le" | "riscv64" | "s390x" | "aix/386" | "aix/amd64" | "aix/arm" | "aix/arm64" | "aix/mips" | "aix/mips64" | "aix/mips64le" | "aix/mipsle" | "aix/ppc64" | "aix/ppc64le" | "aix/riscv64" | "aix/s390x" | "android/386" | "android/amd64" | "android/arm" | "android/arm64" | "android/mips" | "android/mips64" | "android/mips64le" | "android/mipsle" | "android/ppc64" | "android/ppc64le" | "android/riscv64" | "android/s390x" | "darwin/386" | "darwin/amd64" | "darwin/arm" | "darwin/arm64" | "darwin/mips" | "darwin/mips64" | "darwin/mips64le" | "darwin/mipsle" | "darwin/ppc64" | "darwin/ppc64le" | "darwin/riscv64" | "darwin/s390x" | "dragonfly/386" | "dragonfly/amd64" | "dragonfly/arm" | "dragonfly/arm64" | "dragonfly/mips" | "dragonfly/mips64" | "dragonfly/mips64le" | "dragonfly/mipsle" | "dragonfly/ppc64" | "dragonfly/ppc64le" | "dragonfly/riscv64" | "dragonfly/s390x" | "freebsd/386" | "freebsd/amd64" | "freebsd/arm" | "freebsd/arm64" | "freebsd/mips" | "freebsd/mips64" | "freebsd/mips64le" | "freebsd/mipsle" | "freebsd/ppc64" | "freebsd/ppc64le" | "freebsd/riscv64" | "freebsd/s390x" | "illumos/386" | "illumos/amd64" | "illumos/arm" | "illumos/arm64" | "illumos/mips" | "illumos/mips64" | "illumos/mips64le" | "illumos/mipsle" | "illumos/ppc64" | "illumos/ppc64le" | "illumos/riscv64" | "illumos/s390x" | "ios/386" | "ios/amd64" | "ios/arm" | "ios/arm64" | "ios/mips" | "ios/mips64" | "ios/mips64le" | "ios/mipsle" | "ios/ppc64" | "ios/ppc64le" | "ios/riscv64" | "ios/s390x" | "linux/386" | "linux/amd64" | "linux/arm" | "linux/arm64" | "linux/mips" | "linux/mips64" | "linux/mips64le" | "linux/mipsle" | "linux/ppc64" | "linux/ppc64le" | "linux/riscv64" | "linux/s390x" | "netbsd/386" | "netbsd/amd64" | "netbsd/arm" | "netbsd/arm64" | "netbsd/mips" | "netbsd/mips64" | "netbsd/mips64le" | "netbsd/mipsle" | "netbsd/ppc64" | "netbsd/ppc64le" | "netbsd/riscv64" | "netbsd/s390x" | "openbsd/386" | "openbsd/amd64" | "openbsd/arm" | "openbsd/arm64" | "openbsd/mips" | "openbsd/mips64" | "openbsd/mips64le" | "openbsd/mipsle" | "openbsd/ppc64" | "openbsd/ppc64le" | "openbsd/riscv64" | "openbsd/s390x" | "plan9/386" | "plan9/amd64" | "plan9/arm" | "plan9/arm64" | "plan9/mips" | "plan9/mips64" | "plan9/mips64le" | "plan9/mipsle" | "plan9/ppc64" | "plan9/ppc64le" | "plan9/riscv64" | "plan9/s390x" | "solaris/386" | "solaris/amd64" | "solaris/arm" | "solaris/arm64" | "solaris/mips" | "solaris/mips64" | "solaris/mips64le" | "solaris/mipsle" | "solaris/ppc64" | "solaris/ppc64le" | "solaris/riscv64" | "solaris/s390x" | "windows/386" | "windows/amd64" | "windows/arm" | "windows/arm64" | "windows/mips" | "windows/mips64" | "windows/mips64le" | "windows/mipsle" | "windows/ppc64" | "windows/ppc64le" | "windows/riscv64" | "windows/s390x";

export type PackageType = "github_release" | "github_content" | "github_archive" | "http" | "go" | "go_install";

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

export type VersionOverrideType = "github_release" | "github_content" | "github_archive" | "http";

export type VersionSource = "github_tag";
