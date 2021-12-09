module.exports = {
  filters: {
    comments: {
      enablingComment: "textlint-enable",
      disablingComment: "textlint-disable",
    },
    allowlist: {
      allowlistConfigPaths: ["textlint/allow.yml"],
    },
  },
  rules: {
    "max-ten": {
      max: 3,
      strict: false,
      touten: "、",
      kuten: "。",
    },
    "max-kanji-continuous-len": {
      max: 6,
      allow: ["東急田園都市線"],
    },
    "no-mix-dearu-desumasu": {
      preferInHeader: "である",
      preferInBody: "である",
      preferInList: "である",
      strict: true,
    },
    "no-doubled-joshi": {
      min_interval: 1,
      strict: false,
      allow: ["も", "や"],
      separatorCharacters: ["。", "？", "！"],
      commaCharacters: ["、"],
    },
    "no-mixed-zenkaku-and-hankaku-alphabet": {
      prefer: "半角",
    },
    "sentence-length": {
      max: 100,
      skipUrlStringLink: true,
    },
    "first-sentence-length": {
      max: 50,
    },
    "ja-no-mixed-period": {
      periodMark: "。",
      allowPeriodMarks: [],
      allowEmojiAtEnd: false,
      forceAppendPeriod: false,
    },
    // "no-dead-link": {
    //   checkRelative: true,
    //   baseURI: "https://ktnkk.com/",
    //   ignore: ["https://github.com/ktnkk/*"],
    //   preferGET: [],
    //   ignoreRedirects: false,
    //   retry: 3,
    //   userAgent: "textlint-rule-no-dead-link/1.0"
    // },
    prh: {
      checkLink: false,
      checkBlockQuote: false,
      checkEmphasis: true,
      checkHeader: false,
      rulePaths: ["textlint/prh.yml"],
    },
    "no-double-negative-ja": true,
    "no-hankaku-kana": true,
    "ja-no-weak-phrase": true,
    "ja-no-redundant-expression": true,
    "ja-no-abusage": true,
    "no-dropping-the-ra": true,
    "no-doubled-conjunctive-particle-ga": true,
    "no-doubled-conjunction": true,
    "ja-hiragana-keishikimeishi": true,
    "ja-hiragana-fukushi": true,
    "ja-hiragana-hojodoushi": true,
    "ja-unnatural-alphabet": true,
    "@textlint-ja/textlint-rule-no-insert-dropping-sa": true,
    "prefer-tari-tari": true,
    "@textlint-ja/no-filler": true,
    // "preset-jtf-style": true
  },
};
