const CONFIG = {

    // --- クリニック情報 ---
    clinic: {
        name: '小沢眼科グループ',
        subtitle: 'パートナーIOL診断',
        exportFilename: '小沢眼科_IOL診断_結果',
        shareTitle: '小沢眼科 IOL診断結果',
        resultFooter: '小沢眼科 IOL Navi',
        guidanceText: 'この結果をもとに、診察室で視能訓練士がさらに詳しいご説明をいたします。',
    },

    // --- ブランドカラー ---
    theme: {
        brandBlue: '#0116FF',
        brandGold: '#FFC900',
        brandNavy: '#404580',
        backgroundColor: '#f0f2f8',
    },

    // --- ロゴ設定 ---
    logo: {
        type: 'text',
        text: '小沢眼科グループ',
        svg: '',
        src: '',
        height: '32px',
    },

    // --- フィーチャーフラグ ---
    features: {
        colorQuestion: false,     // V2: 色覚質問（クリアレンズ/イエローレンズ）
        paperReference: false,    // 論文エビデンス表示
        proMode: true,            // ORT向けプロ比較モード
        sdmMode: false,           // 将来: 共同意思決定
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
        { cat: '中間（パソコン・料理）', text: 'パソコン作業やお料理など、腕の距離の見え方を重視しますか？', key: 'pc' },
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

    // --- カテゴリー定義（プロ比較モードのグルーピング順序） ---
    categories: ['自費診療', '選定療養'],

    // --- 表示パラメータ定義（プロ比較モードの6軸表示） ---
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
        // 自費診療
        { category: '自費診療', id: 'rayone_galaxy', name: 'RayOne Galaxy', nameJa: 'レイワン ギャラクシー', type: '連続焦点型 EDOF', astigmatism: true,
          driving: 5, pc: 5, smartphone: 4, nightDriving: 5, contrast: 5, overall: 5,
          desc: '遠方から中間まで途切れなくクリアに見える次世代型レンズ。夜間のハロー・グレアも極めて少なく、コントラスト感度も最高クラス。あらゆるシーンで高い視覚品質を実現します。' },
        { category: '自費診療', id: 'intensity', name: 'Intensity', nameJa: 'インテンシティ', type: '回折型 5焦点', astigmatism: true,
          driving: 4, pc: 5, smartphone: 4, nightDriving: 4, contrast: 4, overall: 5,
          desc: '遠方・中遠・中間・近中・近方の5つの距離にピントを配分する革新的なレンズ。日常のあらゆる距離をバランスよくカバーし、老眼鏡への依存を最小限にします。' },
        { category: '自費診療', id: 'evolve', name: 'Evolve', nameJa: 'エボルブ', type: '非回折型 EDOF', astigmatism: true,
          driving: 5, pc: 5, smartphone: 2, nightDriving: 5, contrast: 5, overall: 4,
          desc: '非回折型のため夜間の光のにじみが極めて少なく、遠方〜中間距離に優れたクリアな視界を提供。手元の細かい文字には老眼鏡が必要ですが、運転やゴルフを楽しむ方に最適です。' },
        { category: '自費診療', id: 'mini_well', name: 'Mini WELL', nameJa: 'ミニウェル', type: '累進屈折型 EDOF', astigmatism: true,
          driving: 5, pc: 5, smartphone: 3, nightDriving: 5, contrast: 5, overall: 5,
          desc: '球面収差を利用した独自設計で、ハロー・グレアを抑えながら遠方〜中間距離をカバー。自然で高品質な見え方を求める方におすすめの万能型レンズです。' },
        { category: '自費診療', id: 'mini_well_proxa', name: 'Mini WELL PROXA', nameJa: 'ミニウェル プロクサ', type: '累進屈折型 EDOF(近方重視)', astigmatism: true,
          driving: 3, pc: 5, smartphone: 4, nightDriving: 3, contrast: 4, overall: 4,
          desc: 'Mini WELLの近方重視モデル。パソコン作業や手元の作業を重視する方に適し、中間距離に特に優れた見え方を提供します。遠方や夜間はやや妥協があります。' },
        { category: '自費診療', id: 'lentis_mplus', name: 'LENTIS Mplus', nameJa: 'レンティス エムプラス', type: '分節型 2焦点', astigmatism: true,
          driving: 4, pc: 5, smartphone: 3, nightDriving: 3, contrast: 5, overall: 4,
          desc: 'レンズの上下で遠近を分担する独自の分節型設計。回折型と比べ光のにじみが少なく、コントラスト感度に優れています。中間〜遠方がクリアで、自然な見え方を重視する方に。' },
        { category: '自費診療', id: 'tridiff', name: 'TriDiff', nameJa: 'トライディフ', type: '回折型 3焦点', astigmatism: true,
          driving: 4, pc: 3, smartphone: 4, nightDriving: 3, contrast: 4, overall: 4,
          desc: '遠方・中間・近方の3焦点にピントが合うレンズ。手元の読書やスマホに強く、日常の幅広いシーンをカバーします。夜間の光のにじみにはやや注意が必要です。' },

        // 選定療養
        { category: '選定療養', id: 'odyssey', name: 'Odyssey', nameJa: 'オデッセイ', type: '回折型 3焦点/FVR', astigmatism: true,
          driving: 4, pc: 4, smartphone: 3, nightDriving: 3, contrast: 3, overall: 4,
          desc: '遠方から中間距離まで自然な見え方を提供するEDOFレンズ。選定療養で利用でき、バランスの取れた視界を求める方に適しています。手元には老眼鏡の併用をおすすめします。' },
        { category: '選定療養', id: 'gemetric', name: 'Gemetric', nameJa: 'ジェメトリック', type: '回折型 3焦点', astigmatism: true,
          driving: 4, pc: 4, smartphone: 3, nightDriving: 4, contrast: 4, overall: 4,
          desc: '遠方〜中間距離をクリアにカバーするEDOFレンズ。夜間の見え方も比較的良好で、運転をされる方にも安心。選定療養の範囲で幅広い視生活をサポートします。' },
        { category: '選定療養', id: 'gemetric_plus', name: 'Gemetric Plus', nameJa: 'ジェメトリック プラス', type: '回折型 3焦点', astigmatism: true,
          driving: 3, pc: 4, smartphone: 5, nightDriving: 4, contrast: 4, overall: 4,
          desc: 'Gemetricの近方強化モデル。手元のスマホや読書がしっかり見えつつ、中間・夜間の見え方もバランスよくカバー。選定療養で手元重視の方に最適です。' },
        { category: '選定療養', id: 'vivity', name: 'Vivity', nameJa: 'ビビティ', type: '非回折型 EDOF', astigmatism: true,
          driving: 5, pc: 5, smartphone: 1, nightDriving: 5, contrast: 5, overall: 4,
          desc: '非回折型のため夜間のハロー・グレアが単焦点並みに少なく、極めて自然な見え方が特徴。遠方〜中間が非常にクリアですが、手元の細かい文字には老眼鏡が必要です。' },
        { category: '選定療養', id: 'panoptix', name: 'PanOptix', nameJa: 'パンオプティクス', type: '回折型 3焦点', astigmatism: true,
          driving: 4, pc: 4, smartphone: 4, nightDriving: 4, contrast: 3, overall: 4,
          desc: '遠く・中間・手元の3点にバランスよくピントが合う人気の3焦点レンズ。選定療養で利用でき、日常の幅広いシーンをカバーしたい方におすすめです。' },
        { category: '選定療養', id: 'tecnis_puresee', name: 'TECNIS PureSee', nameJa: 'テクニス ピュアシー', type: '回折型 EDOF', astigmatism: true,
          driving: 5, pc: 5, smartphone: 3, nightDriving: 4, contrast: 4, overall: 4,
          desc: '次世代のEDOFレンズ。遠方〜中間距離が非常にクリアで、コントラスト感度も良好。選定療養の範囲で、遠方重視ながら生活距離もしっかりカバーしたい方に。' },
        { category: '選定療養', id: 'fine_vision', name: 'FINE VISION', nameJa: 'ファイン ビジョン', type: '回折型 3焦点', astigmatism: false,
          driving: 4, pc: 4, smartphone: 4, nightDriving: 3, contrast: 3, overall: 4,
          desc: '遠方・中間・近方の3焦点にピントが合うレンズ。手元の見え方に優れ、日常生活を幅広くカバーします。乱視矯正には非対応のため、乱視の少ない方に適しています。' },
        { category: '選定療養', id: 'acriva_trinova', name: 'Acriva Trinova Pro', nameJa: 'アクリバ トリノバ プロ', type: '回折型 3焦点', astigmatism: true,
          driving: 4, pc: 4, smartphone: 4, nightDriving: 3, contrast: 3, overall: 4,
          desc: '遠方・中間・近方をバランスよくカバーする3焦点レンズ。乱視矯正にも対応し、幅広い方に適応できます。選定療養で利用可能な万能型レンズです。' },
    ],
};
