type PriceResult = {
  range: string;
  noteJa: string;
  noteEn: string;
};

function has(str: string, ...keywords: string[]): boolean {
  const lower = str.toLowerCase();
  return keywords.some(k => lower.includes(k.toLowerCase()));
}

export function getPriceRange(
  model: string,
  era: string,
  itemType: 'jeans' | 'jacket',
  locale: string
): PriceResult | null {
  const combined = `${model} ${era}`;

  // ===== ジャケット =====
  if (itemType === 'jacket' || has(model, '506', '507', '557', '70505')) {
    if (has(model, '506')) {
      return {
        range: locale === 'ja' ? '¥300,000〜¥1,500,000+' : '$2,000–$10,000+',
        noteJa: '現存数が極めて少なく、コンディションにより大きく変動',
        noteEn: 'Extremely rare — condition dramatically affects price',
      };
    }
    if (has(model, '507')) {
      return {
        range: locale === 'ja' ? '¥100,000〜¥500,000' : '$700–$3,500',
        noteJa: '革パッチ有無・コンディションにより変動',
        noteEn: 'Varies significantly by patch type and condition',
      };
    }
    if (has(model, '557')) {
      return {
        range: locale === 'ja' ? '¥50,000〜¥200,000' : '$350–$1,400',
        noteJa: '糸色・ラベルサイズにより変動',
        noteEn: 'Thread color and label size affect pricing',
      };
    }
    if (has(model, '70505') || has(model, '505')) {
      if (has(combined, 'Big E', 'big e', '1971年以前', 'pre-1971')) {
        return {
          range: locale === 'ja' ? '¥30,000〜¥100,000' : '$200–$700',
          noteJa: 'Big E期の70505。糸色・タブ状態で変動',
          noteEn: 'Big E era 70505 — thread color and tab condition affect price',
        };
      }
      if (has(combined, 'Small e', 'small e', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981')) {
        return {
          range: locale === 'ja' ? '¥10,000〜¥40,000' : '$70–$280',
          noteJa: 'Small e初期〜中期の70505',
          noteEn: 'Early–mid Small e era 70505',
        };
      }
      return {
        range: locale === 'ja' ? '¥5,000〜¥20,000' : '$35–$140',
        noteJa: '1981年以降またはそれ以降の70505',
        noteEn: 'Post-1981 or later 70505',
      };
    }
    return null;
  }

  // ===== ジーンズ =====

  // 501XX（最希少）
  if (has(model, '501xx', '501 xx', '501-xx')) {
    return {
      range: locale === 'ja' ? '¥150,000〜¥800,000+' : '$1,000–$5,500+',
      noteJa: '1954年以前の最希少モデル。コンディションにより相場が大きく変動',
      noteEn: 'Pre-1954 ultra-rare. Condition dramatically affects price',
    };
  }

  // 501
  if (has(model, '501')) {
    // 現行品
    if (has(combined, '現行品', 'current production', '2000年代', '2010年代', '2020年代', '2003', '2010', '2015', '2020')) {
      return {
        range: locale === 'ja' ? '¥3,000〜¥8,000' : '$20–$55',
        noteJa: '現行品の中古相場。新品定価は¥12,000〜¥15,000程度',
        noteEn: 'Used market price for current production (retail ~$100–$120)',
      };
    }
    // Big E 初期（革パッチ期）
    if (has(combined, 'Big E', 'big e') && has(combined, '革パッチ', 'leather patch', '1936', '1937', '1938', '1939', '1940', '1941', '1942', '1943', '1944', '1945', '1946', '1947', '1948', '1949', '1950', '1951', '1952', '1953', '1954', '1955', '1950年代前半', 'early 1950s')) {
      return {
        range: locale === 'ja' ? '¥80,000〜¥300,000' : '$550–$2,000',
        noteJa: '革パッチ期Big E。工場・コンディションで大きく変動',
        noteEn: 'Leather patch Big E. Factory and condition greatly affect price',
      };
    }
    // Big E
    if (has(combined, 'Big E', 'big e', '1971年以前', 'pre-1971')) {
      return {
        range: locale === 'ja' ? '¥30,000〜¥120,000' : '$200–$800',
        noteJa: 'Big Eは赤タブ・コンディション・セルビッジ有無で価格が変動',
        noteEn: 'Big E price varies by tab condition, selvedge, and overall condition',
      };
    }
    // Small e（セルビッジあり）
    if (has(combined, 'Small e', 'small e') && has(combined, 'セルビッジ', 'selvedge', 'selvage')) {
      return {
        range: locale === 'ja' ? '¥15,000〜¥50,000' : '$100–$350',
        noteJa: 'Small e期でもセルビッジありは人気が高い',
        noteEn: 'Small e with selvedge commands a premium',
      };
    }
    // Small e
    if (has(combined, 'Small e', 'small e', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981')) {
      return {
        range: locale === 'ja' ? '¥8,000〜¥30,000' : '$55–$200',
        noteJa: '1971〜1981年のSmall e期。セルビッジ有無で変動',
        noteEn: '1971–1981 Small e era. Selvedge presence affects price',
      };
    }
    // USA製（1981〜2002）
    if (has(combined, 'USA', 'MADE IN USA', 'アメリカ製', '1982', '1983', '1984', '1985', '1990', '1995', '2000', '2001', '2002')) {
      return {
        range: locale === 'ja' ? '¥5,000〜¥20,000' : '$35–$140',
        noteJa: '1981〜2002年のUSA製。501は2002年まで国内生産',
        noteEn: '1981–2002 USA-made. 501 was produced domestically until 2002',
      };
    }
  }

  // 505
  if (has(model, '505')) {
    if (has(combined, 'Big E', 'big e')) {
      return {
        range: locale === 'ja' ? '¥15,000〜¥60,000' : '$100–$400',
        noteJa: '505のBig E期。501に比べ流通量が少ない',
        noteEn: '505 Big E era. Less common than 501 Big E',
      };
    }
    return {
      range: locale === 'ja' ? '¥5,000〜¥20,000' : '$35–$140',
      noteJa: 'Small e以降の505。年代・コンディションで変動',
      noteEn: 'Post-Big E 505. Era and condition affect price',
    };
  }

  // 517 / 519 / 646 / 550 / 551（その他ヴィンテージ）
  if (has(model, '517', '519', '646', '550', '551', '578', '606', '917')) {
    if (has(combined, 'Big E', 'big e')) {
      return {
        range: locale === 'ja' ? '¥15,000〜¥50,000' : '$100–$350',
        noteJa: 'Big E期のレアモデル。コレクター需要あり',
        noteEn: 'Rare Big E era model with collector demand',
      };
    }
    return {
      range: locale === 'ja' ? '¥5,000〜¥25,000' : '$35–$170',
      noteJa: 'モデル・年代・コンディションで変動',
      noteEn: 'Varies by model, era, and condition',
    };
  }

  // 701（ウィメンズ）
  if (has(model, '701', '702', '705')) {
    return {
      range: locale === 'ja' ? '¥15,000〜¥60,000' : '$100–$400',
      noteJa: 'ウィメンズモデルは流通量が少なくコレクター人気が高い',
      noteEn: "Women's models are scarce with strong collector demand",
    };
  }

  // 現行品（511 / 512 / 513 / 514 / 527 / 531 / 541 / 559 等）
  if (has(model, '511', '512', '513', '514', '527', '531', '541', '559', '569', '721', '724', '501ct', 'lvc')) {
    if (has(model, 'lvc')) {
      return {
        range: locale === 'ja' ? '¥30,000〜¥80,000' : '$200–$550',
        noteJa: 'LVCは復刻品。定価が高く状態の良いものは高値で取引される',
        noteEn: 'LVC reproductions retail high and hold value when in good condition',
      };
    }
    return {
      range: locale === 'ja' ? '¥3,000〜¥10,000' : '$20–$70',
      noteJa: '現行品の中古相場',
      noteEn: 'Used market price for current production',
    };
  }

  return null;
}
