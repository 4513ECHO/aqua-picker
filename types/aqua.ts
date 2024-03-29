export interface Registry {
    packages: PackageElement[] | null;
}

export interface PackageElement {
    aliases?:              AliasElement[];
    asset?:                string;
    checksum?:             Checksum;
    complete_windows_ext?: boolean;
    cosign?:               Cosign;
    description?:          string;
    files?:                FileElement[];
    format?:               string;
    format_overrides?:     FormatOverrideElement[];
    link?:                 string;
    name?:                 string;
    overrides?:            OverrideElement[];
    path?:                 string;
    private?:              boolean;
    replacements?:         Replacements;
    repo_name?:            string;
    repo_owner?:           string;
    rosetta2?:             boolean;
    search_words?:         string[];
    slsa_provenance?:      SlsaProvenance;
    supported_envs?:       SupportedEnvElement[];
    supported_if?:         string;
    type:                  OverrideType;
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

export interface Checksum {
    algorithm?:    Algorithm;
    asset?:        string;
    cosign?:       Cosign;
    enabled?:      boolean;
    file_format?:  string;
    pattern?:      Pattern;
    replacements?: Replacements;
    type?:         CertificateType;
    url?:          string;
}

export type Algorithm = "md5" | "sha1" | "sha256" | "sha512";

export interface Cosign {
    certificate?:         Certificate;
    cosign_experimental?: boolean;
    enabled?:             boolean;
    key?:                 Certificate;
    opts?:                string[];
    signature?:           Certificate;
}

export interface Certificate {
    asset?:      string;
    repo_name?:  string;
    repo_owner?: string;
    type:        CertificateType;
    url?:        string;
}

export type CertificateType = "github_release" | "http";

export interface Pattern {
    checksum: string;
    file?:    string;
}

export interface Replacements {
    amd64?:   string;
    arm64?:   string;
    darwin?:  string;
    linux?:   string;
    windows?: string;
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
    checksum?:             Checksum;
    complete_windows_ext?: boolean;
    cosign?:               Cosign;
    files?:                FileElement[];
    format?:               string;
    goarch?:               Goarch;
    goos?:                 Goos;
    replacements?:         Replacements;
    slsa_provenance?:      SlsaProvenance;
    type?:                 OverrideType;
    url?:                  string;
    windows_ext?:          string;
}

export type Goarch = "386" | "amd64" | "arm" | "arm64" | "mips" | "mips64" | "mips64le" | "mipsle" | "ppc64" | "ppc64le" | "riscv64" | "s390x";

export interface SlsaProvenance {
    asset?:      string;
    enabled?:    boolean;
    repo_name?:  string;
    repo_owner?: string;
    source_uri?: string;
    type?:       CertificateType;
    url?:        string;
}

export type OverrideType = "github_release" | "github_content" | "github_archive" | "http" | "go" | "go_install";

export type SupportedEnvElement = "all" | "darwin" | "linux" | "windows" | "amd64" | "arm64" | "darwin/amd64" | "darwin/arm64" | "linux/amd64" | "linux/arm64" | "windows/amd64" | "windows/arm64";

export interface VersionOverrideElement {
    asset?:                string;
    checksum?:             Checksum;
    complete_windows_ext?: boolean;
    cosign?:               Cosign;
    files?:                FileElement[];
    format?:               string;
    format_overrides?:     FormatOverrideElement[];
    overrides?:            OverrideElement[];
    path?:                 string;
    replacements?:         Replacements;
    repo_name?:            string;
    repo_owner?:           string;
    rosetta2?:             boolean;
    slsa_provenance?:      SlsaProvenance;
    supported_envs?:       SupportedEnvElement[];
    supported_if?:         string;
    type?:                 OverrideType;
    url?:                  string;
    version_constraint?:   string;
    version_filter?:       string;
    version_source?:       string;
    windows_ext?:          string;
}

export type VersionSource = "github_tag";
