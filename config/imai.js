const CONFIG = {

    // --- クリニック情報 ---
    clinic: {
        name: '今井眼科医院',
        subtitle: 'IOL Navi',
        exportFilename: '今井眼科医院_IOL診断_結果',
        shareTitle: '今井眼科医院 IOL診断結果',
        resultFooter: '今井眼科医院 IOL Navi',
        guidanceText: 'この結果をもとに、診察室でさらに詳しいご説明をいたします。',
    },

    // --- ブランドカラー ---
    theme: {
        brandBlue: '#0080C5',
        brandGold: '#FFC900',
        brandNavy: '#004A73',
        backgroundColor: '#f0f4f8',
    },

    // --- ロゴ設定 ---
    logo: {
        type: 'svg',
        text: '今井眼科医院',
        svg: '<svg width="637" height="125" viewBox="0 0 637 125" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect width="637" height="125" fill="url(#pattern0_15_7)"/><defs><pattern id="pattern0_15_7" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0_15_7" transform="scale(0.00156986 0.008)"/></pattern><image id="image0_15_7" width="637" height="125" preserveAspectRatio="none" xlink:href="data:image/png;base64,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"/></defs></svg>',
        src: '',
        height: '32px',
    },

    // --- フィーチャーフラグ ---
    features: {
        colorQuestion: false,
        paperReference: false,
        proMode: true,
        sdmMode: false,
    },

    // --- スコアリング設定 ---
    scoring: {
        multiplier: 5.5,
        minScore: 10,
        monofocalThreshold: 60,
        monofocalPattern: {
            enabled: true,
            conditions: {
                smartphone: { max: 2 },
                pc: { max: 2 },
                driving: { min: 4 },
                nightDriving: { min: 4 },
            },
        },
    },

    // --- 質問定義 ---
    questions: [
        { cat: '遠方（運転・ゴルフ）', text: '運転やゴルフなど、遠くをクリアに見ることを重視しますか？', key: 'driving' },
        { cat: '中間（パソコン・料理）', text: 'パソコン作業やお料理など、腕を伸ばした距離の見え方を重視しますか？', key: 'pc' },
        { cat: '近方（スマホ・読書）', text: 'スマホや読書などの手元を、老眼鏡なしで快適に見たいですか？', key: 'smartphone' },
        { cat: '夜間の運転', text: '夜間に車の運転をよくされますか？（光のにじみ・まぶしさを避けたい）', key: 'nightDriving' },
    ],

    // --- スケール設定 ---
    scale: {
        min: 1,
        max: 5,
        defaultValue: 3,
        lowLabel: '妥協できる',
        highLabel: '絶対に譲れない',
    },

    // --- カテゴリー定義 ---
    categories: ['選定療養'],

    // --- 表示パラメータ定義 ---
    displayParams: [
        { key: 'driving',      label: '運転・ゴルフ' },
        { key: 'pc',           label: 'パソコン・料理' },
        { key: 'smartphone',   label: 'スマホ・読書' },
        { key: 'nightDriving', label: '夜間の運転' },
        { key: 'contrast',     label: 'コントラスト' },
        { key: 'overall',      label: '総合評価' },
    ],

    // --- 回答サマリーの表示ラベル ---
    answerLabels: [
        { key: 'driving',      label: '遠方' },
        { key: 'pc',           label: '中間' },
        { key: 'smartphone',   label: '近方' },
        { key: 'nightDriving', label: '夜間' },
    ],

    // --- 単焦点レンズ推奨時のテキスト ---
    monofocalRecommendation: {
        title: '単焦点レンズがおすすめです',
        description: 'あなたのライフスタイルには、シンプルな単焦点レンズが最も自然で快適な選択かもしれません。',
        detail: '遠くがクリアに見え、夜間の光のにじみもありません。手元や中間距離には老眼鏡を併用します。保険適用のため費用も抑えられます。',
        badgeText: '保険適用',
        subheading: 'それでも多焦点を検討する場合の候補：',
    },

    // --- レンズデータベース ---
    lenses: [
        { category: '選定療養', id: 'panoptix', name: 'PanOptix', nameJa: 'パンオプティクス',
          type: '回折型 3焦点', astigmatism: true,
          driving: 5, pc: 5, smartphone: 5, nightDriving: 2,
          contrast: 3, overall: 4,
          desc: '遠方・中間・近方すべてバランスよく見える3焦点レンズ。幅広い距離をカバーしますが、夜間のハロー・グレアがやや多めです。近方は約40cmで明視できます。' },
        { category: '選定療養', id: 'odyssey', name: 'Odyssey', nameJa: 'オデッセイ',
          type: '回折型 3焦点/FVR', astigmatism: true,
          driving: 5, pc: 5, smartphone: 5, nightDriving: 3,
          contrast: 4, overall: 4,
          desc: '遠方から近方まで高いバランスを持つ3焦点レンズ。PanOptixと比べハロー・グレアが抑えられ、コントラスト感度も良好です。近方は33〜40cmで明視できます。' },
        { category: '選定療養', id: 'puresee', name: 'TECNIS PureSee', nameJa: 'テクニス ピュアシー',
          type: '回折型 EDOF', astigmatism: true,
          driving: 5, pc: 4, smartphone: 3, nightDriving: 5,
          contrast: 5, overall: 4,
          desc: '遠方の見え方と夜間の視質を重視したEDOFレンズ。ハロー・グレアが非常に少なく、コントラスト感度も高い。近方は約50cmで、手元の細かい作業には老眼鏡の補助が必要な場合があります。' },
        { category: '選定療養', id: 'vivity', name: 'Vivity', nameJa: 'ヴィヴィティ',
          type: '非回折型 EDOF', astigmatism: true,
          driving: 5, pc: 5, smartphone: 2, nightDriving: 5,
          contrast: 5, overall: 4,
          desc: '非回折型のため光学的ロスが少なく、遠方〜中間の見え方とコントラストが非常に優れたEDOFレンズ。ハロー・グレアも最小限。ただし近方（約60cm）は限定的で、読書には老眼鏡が必要です。' },
        { category: '選定療養', id: 'geometric', name: 'GEMetric', nameJa: 'ジオメトリック',
          type: '回折型 3焦点', astigmatism: true,
          driving: 5, pc: 4, smartphone: 4, nightDriving: 3,
          contrast: 4, overall: 4,
          desc: '遠方から近方までバランスの良い見え方を提供するレンズ。中間・近方もしっかりカバーし、ハロー・グレアも中程度に抑えられています。近方は約40cmで明視できます。' },
        { category: '選定療養', id: 'geometric_plus', name: 'GEMetric Plus', nameJa: 'ジオメトリック プラス',
          type: '回折型 3焦点', astigmatism: true,
          driving: 4, pc: 4, smartphone: 5, nightDriving: 3,
          contrast: 4, overall: 4,
          desc: 'GEMetricの近方強化版。手元の見え方が最も優れ、スマホや読書を重視する方に最適です。近方は約35cmで明視でき、ハロー・グレアは中程度です。' },
    ],
};
