import { AnchorLink } from "./anchor-link";

const industryProblems = [
  {
    number: "01",
    title: "信息有时差",
    description: "行情、政策与产业事件依赖人工采集和逐层传递，市场已经变化，判断仍停留在日报与研报周期。",
    result: "从按天更新，到实时感知",
  },
  {
    number: "02",
    title: "业务有断点",
    description: "资讯、研究、供需、客户与交易分散在不同系统里，看懂行情之后，仍要重新寻找资源和推进商机。",
    result: "从一份报告，到一条行动链",
  },
  {
    number: "03",
    title: "专业有门槛",
    description: "高质量产业判断依赖资深经验与大量人力，专业能力集中在少数机构，难以低成本、规模化地服务更多主体。",
    result: "从少数人经验，到可复用能力",
  },
];

const valueCards = [
  {
    number: "01",
    eyebrow: "社会向善",
    title: "社会价值",
    headline: "让产业信息成为更普惠的决策基础",
    description:
      "降低专业信息的获取与理解门槛，帮助更多产业主体及时识别供需变化与经营风险，为保供稳链、资源高效配置和实体经济稳健运行提供智能支持。",
    points: ["缓解产业信息不对称", "帮助风险更早识别", "服务保供稳链与实体经济"],
    tone: "blue",
  },
  {
    number: "02",
    eyebrow: "行业共建",
    title: "行业价值",
    headline: "把分散链路连成可计算的产业网络",
    description:
      "连接行情、资讯、研报、供需与商机，推动数据口径、分析框架和业务协同逐步标准化，让行业知识可以沉淀、复用并持续进化。",
    points: ["统一数据与知识入口", "沉淀可复用分析框架", "贯通信息、判断与商机"],
    tone: "violet",
  },
  {
    number: "03",
    eyebrow: "客户增益",
    title: "客户价值",
    headline: "让每一次判断更快、更准、更接近行动",
    description:
      "面向采购、销售、交易、研究与经营管理者，把高频检索、分析和匹配工作交给智能体，帮助企业降本、控险、提效并更快抓住机会。",
    points: ["缩短研究与决策时间", "提升采购销售协同效率", "降低库存、价格与履约风险"],
    tone: "cyan",
  },
];

const capabilities = [
  {
    icon: "数",
    tag: "核心能力",
    title: "数据智能体",
    description: "把行情、政策、资讯与研报放进同一个入口，先给结论，再展开依据。",
    items: ["智能行情问答", "资讯与政策解读", "研报与深度分析", "价格趋势判断"],
    featured: true,
  },
  {
    icon: "撮",
    tag: "业务贯通",
    title: "撮合智能体",
    description: "把自然语言中的采购与销售需求结构化，形成匹配建议与可跟踪商机。",
    items: ["需求结构化", "供需资源匹配", "匹配理由解释", "商机沉淀与跟踪"],
  },
  {
    icon: "智",
    tag: "统一底座",
    title: "智能交互底座",
    description: "用多轮对话承载业务，在互动中沉淀画像、观点、需求与内容资产。",
    items: ["统一智能入口", "上下文记忆", "主动反问补全", "内容再输出与分享"],
  },
];

const breakthroughs = [
  {
    number: "01",
    tag: "实时响应",
    title: "从人工资讯周期，走向 7×24 小时秒级响应",
    description: "简单行情快速作答，复杂问题沿分析链路展开，让市场变化不再等待日报、研报和人工排期。",
    proof: "2 秒快答 · 10 秒理清",
  },
  {
    number: "02",
    tag: "产业认知",
    title: "从关键词检索，走向产业因果推理",
    description: "不是简单复述资讯，而是把供需、库存、成本、利润、物流与政策放回产业链和周期中理解。",
    proof: "空间 × 时间 × 要素",
  },
  {
    number: "03",
    tag: "可信决策",
    title: "从标准答案生成，走向经营约束下的建议",
    description: "先给结论，再呈现依据与推理链；信息不足时主动追问库存、用量、价格区间等条件，降低建议失真。",
    proof: "结论 × 依据 × 边界",
  },
  {
    number: "04",
    tag: "业务行动",
    title: "从看懂行情，走向商机与交易推进",
    description: "让一次市场发现继续转化为采购节奏、销售机会、资源匹配和商机跟踪，推动智能真正进入经营过程。",
    proof: "资讯研判 × 商机撮合 × 交易推进",
  },
];

const journey = [
  ["01", "发现市场", "行情 · 资讯 · 政策"],
  ["02", "分析判断", "研报 · 风险 · 驱动"],
  ["03", "制定策略", "趋势 · 时机 · 方案"],
  ["04", "匹配商机", "需求 · 资源 · 理由"],
  ["05", "推进交易", "询价 · 比选 · 跟进"],
  ["06", "履约复盘", "状态 · 预警 · 评估"],
];

const roadmap = [
  ["07.31", "内测版本", "能用", "智能问答工具", "验证统一入口与核心交互"],
  ["08.31", "公测计划", "好用", "分析师工作台", "扩展资讯中心与商机中心"],
  ["09.15", "商业化计划", "价值闭环", "个性化行业产品", "验证内容与撮合权益"],
  ["持续", "长期方向", "专业进化", "企业综合方案行业专家", "融合数据、专家经验与产业资源"],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <AnchorLink className="brand" targetId="top" ariaLabel="返回首页">
          <span className="brand-symbol">万</span>
          <span className="brand-copy"><strong>万联易达</strong><small>大宗智能体</small></span>
        </AnchorLink>
        <nav aria-label="页面导航">
          <AnchorLink targetId="problem">产业问题</AnchorLink>
          <AnchorLink targetId="breakthrough">智能突破</AnchorLink>
          <AnchorLink targetId="product">产品闭环</AnchorLink>
          <AnchorLink targetId="value">三重价值</AnchorLink>
          <AnchorLink targetId="roadmap">进化路径</AnchorLink>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="hero-badge"><i /> 大宗商品产业数字化新基建</div>
            <h1>
              <span className="hero-line">让产业看见变化</span>
              <span className="hero-line">算得清影响</span>
              <span className="hero-line hero-highlight">抓得住机会</span>
            </h1>
            <p className="hero-lead">
              以数据智能体与撮合智能体为双引擎，贯通资讯研判、商机撮合与交易推进，
              把复杂市场信号转化为可信判断和可执行的经营动作。
            </p>
            <div className="hero-actions">
              <AnchorLink className="primary-action" targetId="problem">看清产业问题 <i>↗</i></AnchorLink>
              <AnchorLink className="secondary-action" targetId="product">查看产品闭环 <i>→</i></AnchorLink>
            </div>
            <div className="hero-keywords"><span>懂产业</span><span>会推理</span><span>能行动</span></div>
          </div>

          <div className="hero-showcase" aria-label="大宗智能体产业判断示意">
            <div className="showcase-status"><span><i /> 产业信号已更新</span><b>今日判断</b></div>
            <div className="showcase-main">
              <span>华东热卷 · 采购策略</span>
              <h2>库存持续上升，采购节奏宜转向分批执行。</h2>
              <p>库存变化 → 区域价差 → 需求节奏 → 采购约束</p>
            </div>
            <div className="showcase-answer">
              <span>智能体建议</span>
              <strong>先缩短采购周期，再观察库存拐点。</strong>
            </div>
            <div className="showcase-metrics">
              <div><strong>104</strong><span>品类规划</span></div>
              <div><strong>23</strong><span>产业主体</span></div>
              <div><strong>6</strong><span>业务能力</span></div>
            </div>
            <div className="signal-chip signal-one">供需变化 <b>↑</b></div>
            <div className="signal-chip signal-two">价格风险 <b>可控</b></div>
          </div>

          <div className="hero-stats" aria-label="三项核心指标">
            <div><strong>2 秒 / 10 秒</strong><span>行情快答 · 复杂逻辑理清</span></div>
            <div><strong>7 × 24</strong><span>持续感知 · 全天候响应</span></div>
            <div><strong>双引擎</strong><span>数据研判 · 商机撮合</span></div>
          </div>
        </div>
      </section>

      <section className="problem-section" id="problem">
        <div className="section-shell">
          <div className="section-title split">
            <div><span>01 · 产业问题</span><h2>大宗产业缺的不是更多信息，而是更短的决策链路。</h2></div>
            <p>信息不对称、业务链路割裂、专业服务成本高企，构成了产业效率长期难以突破的三个关键瓶颈。</p>
          </div>
          <div className="problem-grid">
            {industryProblems.map((item) => (
              <article className="problem-card" key={item.number}>
                <b>{item.number}</b>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <strong>{item.result}</strong>
              </article>
            ))}
          </div>
          <div className="problem-conclusion"><span>核心命题</span><strong>用 AI 同时重构信息效率与交易效率。</strong></div>
        </div>
      </section>

      <section className="breakthrough-section section-shell" id="breakthrough">
        <div className="section-title centered">
          <span>02 · 产业人工智能突破</span>
          <h2>不只是会回答，更要懂产业、会推理、能行动。</h2>
          <p>通用模型解决语言理解，大宗智能体进一步解决产业知识、实时信号、可信决策与业务闭环，让人工智能真正进入经营现场。</p>
        </div>
        <div className="breakthrough-grid">
          {breakthroughs.map((item) => (
            <article className="breakthrough-card" key={item.number}>
              <div className="breakthrough-top"><b>{item.number}</b><span>{item.tag}</span></div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <em>{item.proof}</em>
            </article>
          ))}
        </div>
        <div className="breakthrough-summary" aria-label="产业智能突破方向">
          <span>搜索工具</span><i>→</i><strong>产业推理伙伴</strong><i>→</i><strong>经营行动助手</strong>
        </div>
      </section>

      <section className="product-section" id="product">
        <div className="section-shell">
          <div className="section-title split">
            <div><span>03 · 双引擎产品闭环</span><h2>从看懂行情，到发现商机，再到推进交易。</h2></div>
            <p>数据智能体负责理解市场、形成判断；撮合智能体负责理解需求、连接资源。统一底座让每一次交互继续向业务结果推进。</p>
          </div>
          <div className="capability-grid">
            {capabilities.map((capability) => (
              <article className={`capability-card ${capability.featured ? "featured" : ""}`} key={capability.title}>
                <div className="capability-icon">{capability.icon}</div>
                <span className="capability-tag">{capability.tag}</span>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
                <div className="capability-list">{capability.items.map((item) => <span key={item}>{item}</span>)}</div>
              </article>
            ))}
          </div>

          <div className="journey-heading"><span>一条连续的业务链路</span><strong>信息不止被看见，更要被转化。</strong></div>
          <div className="journey-track product-journey">
            {journey.map(([number, title, description]) => (
              <article key={number}><b>{number}</b><h3>{title}</h3><p>{description}</p></article>
            ))}
          </div>

          <div className="agent-panel">
            <div className="agent-panel-copy">
              <span>可信回答，不止一个结论</span>
              <h3>先理解产业逻辑，再给经营建议。</h3>
              <p>智能体会沿着库存、区域价差、供需节奏和企业约束建立分析链路；信息不足时主动反问，避免给出脱离业务条件的答案。</p>
              <div className="panel-chips"><i>快</i><i>准</i><i>可解释</i><i>会反问</i></div>
            </div>
            <div className="conversation-card" aria-label="大宗智能体交互示意">
              <div className="conversation-head"><span><i>智</i><b>大宗智能体</b></span><em>在线</em></div>
              <div className="question">华东热卷近期库存上升，采购节奏要不要调整？</div>
              <div className="reasoning"><span>分析链路</span><p>库存变化 → 区域价差 → 供需节奏 → 采购约束</p></div>
              <div className="answer"><small>结论先行</small><strong>建议先缩短采购周期，再根据库存拐点分批执行。</strong><p>请补充月均用量、当前库存天数与可接受价格区间，以生成更贴近经营的方案。</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="value-section section-shell" id="value">
        <div className="section-title centered">
          <span>04 · 三重价值</span>
          <h2>客户经营改善，行业协同升级，最终服务实体经济。</h2>
          <p>价值沿着一条清晰路径展开：先帮助客户更快决策，再推动行业知识与资源协同，进一步服务保供稳链与信息普惠。</p>
        </div>
        <div className="value-grid">
          {valueCards.map((card) => (
            <article className={`value-card ${card.tone}`} key={card.title}>
              <div className="card-top"><span>{card.eyebrow}</span><b>{card.number}</b></div>
              <p className="value-label">{card.title}</p>
              <h3>{card.headline}</h3>
              <p className="value-description">{card.description}</p>
              <ul>{card.points.map((point) => <li key={point}>{point}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="coverage-section section-shell">
        <div className="coverage-hero">
          <div className="coverage-copy"><span>05 · 规模与进化</span><h2>一套底座，服务更广泛的产业主体。</h2><p>以六大产业板块和 104 个品类规划为覆盖蓝图，逐步贯通数据、知识与产业资源。</p></div>
          <div className="coverage-numbers"><div><strong>104</strong><span>品类规划</span></div><div><strong>6</strong><span>产业板块</span></div><div><strong>23</strong><span>类产业主体</span></div></div>
        </div>
        <p className="coverage-note">“品类规划”不等同于所有品类均已完成全量数据与交易资源接入；具体能力以实际测试与发布版本为准。</p>
      </section>

      <section className="roadmap-section section-shell" id="roadmap">
        <div className="section-title split">
          <div><span>能力进化路线</span><h2>从问答工具，到分析伙伴，再到产业智库。</h2></div>
          <p>每一阶段解决一个关键问题：先验证可信问答，再提升分析效率，随后贯通商机与交易，最终沉淀企业综合解决方案能力。</p>
        </div>
        <div className="roadmap-grid">
          {roadmap.map(([date, stage, value, title, description], index) => (
            <article className={index === 0 ? "current" : ""} key={date}>
              <div><b>{date}</b><span>{stage}</span></div>
              <em>{String(index + 1).padStart(2, "0")} · {value}</em>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <div className="section-shell footer-inner"><div><strong>万联易达 · 大宗智能事业群</strong><span>大宗行业的智能入口</span></div><p>内容依据项目历次汇报及 7.31 产品需求资料整理 · 数据与路线截至 2026 年 7 月</p></div>
      </footer>
    </main>
  );
}
