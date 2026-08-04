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

const industryChain = [
  ["01", "资源端", "矿山 · 农场 · 能源基地"],
  ["02", "生产端", "冶炼 · 制造 · 加工"],
  ["03", "流通端", "贸易 · 仓储 · 物流"],
  ["04", "需求端", "采购 · 消费 · 建设"],
  ["05", "金融端", "银行 · 机构 · 资方"],
  ["06", "治理端", "政府 · 交易所 · 协会"],
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

const roleScenarios = [
  {
    role: "生产供应端",
    goal: "稳生产、控成本、保利润",
    story: "当原料成本、产能政策与区域需求同时变化，智能体快速梳理影响链，辅助判断排产、库存与销售节奏。",
    outputs: ["产能与成本模型", "库存与利润预警", "区域需求洞察"],
  },
  {
    role: "流通贸易端",
    goal: "抓价差、管库存、快周转",
    story: "将行情、基差、仓单、物流和客户需求放在同一上下文中，识别可执行的采购窗口与销售机会。",
    outputs: ["基差与价差监测", "供需商机撮合", "客户需求跟踪"],
  },
  {
    role: "采购需求端",
    goal: "保供应、降成本、控风险",
    story: "结合用量、库存天数、可接受价格和交付约束，生成更贴近真实经营条件的分批采购建议。",
    outputs: ["采购节点判断", "分批执行策略", "供应风险预警"],
  },
  {
    role: "金融与研究端",
    goal: "看资产、识风险、提效率",
    story: "穿透企业、货物与交易背景，用产业数据支撑授信研究、资产判断、专题分析与风险识别。",
    outputs: ["企业与贸易背景", "行业专题研究", "风险要素提示"],
  },
];

const socialImpacts = [
  ["保", "助力保供稳价", "更快识别供需、成本与政策变化，为实体产业稳生产、稳供应提供决策支持。"],
  ["普", "缩小信息鸿沟", "让区域中小企业也能使用原本稀缺、昂贵的专业分析能力，提升产业机会公平。"],
  ["融", "连接产业金融", "以真实产业信号与供需关系连接资金和资产两端，提升供应链金融服务效率。"],
  ["绿", "服务绿色转型", "把能源、碳资产、环境权益与产业经营放进同一数据视野，辅助绿色决策。"],
];

const categoryGroups = [
  ["19", "有色金属及贵金属"],
  ["10", "黑色金属及铁合金"],
  ["28", "农产品"],
  ["27", "化工品"],
  ["8", "能源类"],
  ["12", "其他特色品种"],
];

const expertStages = [
  ["L1", "数据执行者", "查询数据、生成标准输出", "active"],
  ["L2", "逻辑构建者", "理解供需与产业关系", "active"],
  ["L3", "策略掌舵者", "建立平衡表与策略建议", "next"],
  ["L4", "框架定调者", "融合宏观、产业与微观", "future"],
  ["L5", "生态设计者", "形成企业综合解决方案", "future"],
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
          <AnchorLink targetId="industry">产业底座</AnchorLink>
          <AnchorLink targetId="breakthrough">智能突破</AnchorLink>
          <AnchorLink targetId="product">产品闭环</AnchorLink>
          <AnchorLink targetId="scenarios">产业场景</AnchorLink>
          <AnchorLink targetId="value">三重价值</AnchorLink>
          <AnchorLink targetId="roadmap">未来</AnchorLink>
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
              <AnchorLink className="primary-action" targetId="industry">进入产业叙事 <i>↗</i></AnchorLink>
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

      <section className="industry-section" id="industry">
        <div className="section-shell">
          <div className="chapter-kicker"><span>序章</span><b>一切经营，始于对产业变化的理解</b></div>
          <div className="industry-opening">
            <div>
              <h2>一块矿石、一吨钢材、一船粮食，连接的是整个实体经济。</h2>
            </div>
            <p>大宗商品从资源地出发，穿过生产、流通、消费、金融与治理体系。价格的一次波动，会沿产业链传导为成本、库存、利润与风险。真正重要的，从来不只是“发生了什么”，而是“将影响谁、如何影响、下一步怎么办”。</p>
          </div>
          <div className="industry-chain" aria-label="大宗商品产业链">
            {industryChain.map(([number, title, description]) => (
              <article key={number}><b>{number}</b><h3>{title}</h3><p>{description}</p></article>
            ))}
          </div>
          <div className="industry-meaning">
            <article><span>影响成本</span><strong>原料与能源价格，决定制造业经营底线。</strong></article>
            <article><span>影响供应</span><strong>库存与物流变化，关系产业链稳定运行。</strong></article>
            <article><span>影响决策</span><strong>政策与需求拐点，重塑采购和销售节奏。</strong></article>
          </div>
        </div>
      </section>

      <section className="problem-section" id="problem">
        <div className="section-shell">
          <div className="section-title split">
            <div><span>第一幕 · 产业困局</span><h2>大宗产业缺的不是更多信息，而是更短的决策链路。</h2></div>
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
          <div className="mode-shift" aria-label="传统模式与智能体模式对比">
            <div className="mode-column legacy">
              <span>传统服务模式</span>
              <h3>靠人找信息，靠经验做判断</h3>
              <ul><li>人工采价、按天更新</li><li>资讯与交易彼此割裂</li><li>专业能力依赖人力堆积</li><li>中小企业难以低成本获得服务</li></ul>
            </div>
            <div className="mode-arrow"><b>AI</b><span>重构</span></div>
            <div className="mode-column agent-mode">
              <span>大宗智能体模式</span>
              <h3>让系统感知变化，让判断直通行动</h3>
              <ul><li>7×24 小时实时响应</li><li>资讯研判直接连接商机</li><li>产业知识可沉淀、可复制</li><li>专业分析能力规模化普惠</li></ul>
            </div>
          </div>
          <div className="problem-conclusion"><span>核心命题</span><strong>用 AI 同时重构信息效率与交易效率。</strong></div>
        </div>
      </section>

      <section className="breakthrough-section section-shell" id="breakthrough">
        <div className="section-title centered">
          <span>第二幕 · AI 破局</span>
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
            <div><span>第三幕 · 双引擎登场</span><h2>从看懂行情，到发现商机，再到推进交易。</h2></div>
            <aside className="positioning-statement" aria-label="大宗智能体核心定位">
              <span>核心定位</span>
              <p><strong>数据智能体</strong>负责理解市场、形成判断；<strong>撮合智能体</strong>负责理解需求、连接资源。<em>统一底座让每一次交互继续向业务结果推进。</em></p>
            </aside>
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

      <section className="scenario-section" id="scenarios">
        <div className="section-shell">
          <div className="section-title split">
            <div><span>第四幕 · 进入经营现场</span><h2>同一个产业智能底座，服务不同角色的真实任务。</h2></div>
            <p>智能体不是展示型能力。它需要理解每个角色的经营目标、约束条件和业务语言，把通用智能转化为具体的产业动作。</p>
          </div>
          <div className="scenario-grid">
            {roleScenarios.map((scenario, index) => (
              <article className="scenario-card" key={scenario.role}>
                <div className="scenario-top"><b>0{index + 1}</b><span>{scenario.role}</span></div>
                <h3>{scenario.goal}</h3>
                <p>{scenario.story}</p>
                <div>{scenario.outputs.map((output) => <span key={output}>{output}</span>)}</div>
              </article>
            ))}
          </div>
          <div className="scenario-thread">
            <span>从一个问题开始</span><i>→</i><strong>补全经营约束</strong><i>→</i><strong>建立产业推理链</strong><i>→</i><strong>给出可执行建议</strong><i>→</i><strong>持续跟踪结果</strong>
          </div>
        </div>
      </section>

      <section className="value-section section-shell" id="value">
        <div className="section-title centered">
          <span>第五幕 · 价值扩散</span>
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
        <div className="impact-heading"><span>价值继续向产业之外扩散</span><h3>让智能能力服务更稳定、更普惠、更绿色的实体经济。</h3></div>
        <div className="impact-grid">
          {socialImpacts.map(([icon, title, description]) => (
            <article key={title}><b>{icon}</b><h3>{title}</h3><p>{description}</p></article>
          ))}
        </div>
      </section>

      <section className="coverage-section section-shell">
        <div className="coverage-hero">
          <div className="coverage-copy"><span>终章 · 规模与进化</span><h2>一套底座，服务更广泛的产业主体。</h2><p>以六大产业板块和 104 个品类规划为覆盖蓝图，逐步贯通数据、知识与产业资源。</p></div>
          <div className="coverage-numbers"><div><strong>104</strong><span>品类规划</span></div><div><strong>6</strong><span>产业板块</span></div><div><strong>23</strong><span>类产业主体</span></div></div>
        </div>
        <div className="category-grid">
          {categoryGroups.map(([count, label]) => <article key={label}><strong>{count}</strong><span>{label}</span></article>)}
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
        <div className="expert-panel">
          <div className="expert-copy"><span>专业能力进化</span><h3>不仅迭代产品版本，也持续提升“产业分析师”的能力等级。</h3><p>当前重点是把数据执行与逻辑构建做深、做稳，并逐步向策略、框架与企业综合方案能力演进。</p></div>
          <div className="expert-ladder">
            {expertStages.map(([level, title, description, status]) => (
              <article className={status} key={level}><b>{level}</b><div><strong>{title}</strong><span>{description}</span></div></article>
            ))}
          </div>
        </div>
      </section>

      <section className="manifesto-section">
        <div className="section-shell manifesto-inner">
          <span>让产业连接更高效</span>
          <h2>让每一个产业主体，都拥有理解变化、判断影响、抓住机会的能力。</h2>
          <p>从市场信号到产业判断，从经营策略到资源连接，大宗智能体正在把专业能力沉淀为可持续进化的产业智能基础设施。</p>
          <div><b>看见变化</b><i>→</i><b>理解影响</b><i>→</i><b>形成策略</b><i>→</i><b>连接资源</b><i>→</i><b>推进行动</b></div>
        </div>
      </section>

      <footer>
        <div className="section-shell footer-inner"><div><strong>万联易达 · 大宗智能事业群</strong><span>大宗行业的智能入口</span></div><p>内容依据项目历次汇报及 7.31 产品需求资料整理 · 数据与路线截至 2026 年 7 月</p></div>
      </footer>
    </main>
  );
}
