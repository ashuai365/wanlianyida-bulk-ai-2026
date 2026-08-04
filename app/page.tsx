const valueCards = [
  {
    number: "01",
    eyebrow: "SOCIAL VALUE",
    title: "社会价值",
    headline: "让产业信息成为更普惠的决策基础",
    description:
      "降低专业信息的获取与理解门槛，帮助更多产业主体及时识别供需变化与经营风险，为保供稳链、资源高效配置和实体经济稳健运行提供智能支持。",
    points: ["缓解产业信息不对称", "帮助风险更早识别", "服务保供稳链与实体经济"],
    tone: "blue",
  },
  {
    number: "02",
    eyebrow: "INDUSTRY VALUE",
    title: "行业价值",
    headline: "把分散链路连成可计算的产业网络",
    description:
      "连接行情、资讯、研报、供需与商机，推动数据口径、分析框架和业务协同逐步标准化，让行业知识可以沉淀、复用并持续进化。",
    points: ["统一数据与知识入口", "沉淀可复用分析框架", "贯通信息、判断与商机"],
    tone: "violet",
  },
  {
    number: "03",
    eyebrow: "CUSTOMER VALUE",
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
    tag: "核心能力",
    title: "数据智能体",
    description: "把行情、政策、资讯与研报放进同一个入口，先给结论，再展开依据。",
    items: ["AI 行情问答", "资讯与政策解读", "研报与深度分析", "价格趋势判断"],
    featured: true,
  },
  {
    tag: "业务贯通",
    title: "撮合智能体",
    description: "把自然语言中的采购与销售需求结构化，形成匹配建议与可跟踪商机。",
    items: ["需求结构化", "供需资源匹配", "匹配理由解释", "商机沉淀与跟踪"],
  },
  {
    tag: "统一底座",
    title: "智能交互底座",
    description: "用多轮对话承载业务，在互动中沉淀画像、观点、需求与内容资产。",
    items: ["统一 AI 入口", "上下文记忆", "主动反问补全", "内容再输出与分享"],
  },
];

const methods = [
  ["SPACE", "空间逻辑", "理解资源地、制造集群与消费市场的错配，把物流、运力和区域价差纳入判断。", "资源 → 物流 → 需求"],
  ["TIME", "时间逻辑", "同时观察短周期异动、中周期库存利润与长周期产能政策，避免只看一个时间截面。", "日周 → 月季 → 周期"],
  ["FACTORS", "要素逻辑", "把产、销、存、运、需、利润、成本与宏观政策串成可解释的传导链路。", "产销存运需利本政"],
];

const journey = [
  ["01", "发现市场", "行情 · 资讯 · 政策"],
  ["02", "分析判断", "研报 · 风险 · 驱动"],
  ["03", "制定策略", "趋势 · 时机 · 方案"],
  ["04", "匹配商机", "需求 · 资源 · 理由"],
  ["05", "推进交易", "询价 · 比选 · 跟进"],
  ["06", "履约复盘", "状态 · 预警 · 评估"],
];

const roleCards = [
  ["供应端", "稳生产、控成本、保利润", "产能与成本模型 · 库存预警"],
  ["贸易端", "抓价差、管库存、快周转", "基差监测 · 商机撮合"],
  ["需求端", "保供、降本、优化采购", "采购节点 · 分批策略"],
  ["金融与研究", "看资产、控风险、提效率", "贸易背景 · 专题研究"],
];

const roadmap = [
  ["07.31", "内测版本", "能用", "智能问答工具", "验证统一入口与核心交互"],
  ["08.31", "公测计划", "好用", "分析师工作台", "扩展资讯中心与商机中心"],
  ["09.15", "商业化计划", "价值闭环", "个性化行业产品", "验证内容与撮合权益"],
  ["FUTURE", "长期方向", "专业进化", "企业综合方案行业专家", "融合数据、专家经验与产业资源"],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="返回首页">
          <span className="brand-symbol">W</span>
          <span className="brand-copy"><strong>万联易达</strong><small>大宗智能体</small></span>
        </a>
        <nav aria-label="页面导航">
          <a href="#value">价值</a>
          <a href="#product">产品</a>
          <a href="#method">专业能力</a>
          <a href="#scenarios">产业场景</a>
          <a href="#roadmap">路线</a>
        </nav>
        <a className="header-action" href="#contact">合作咨询</a>
      </header>

      <section className="hero" id="top">
        <div className="aurora aurora-blue" />
        <div className="aurora aurora-violet" />
        <div className="hero-inner">
          <div className="hero-badge"><i /> 大宗产业智能基础设施</div>
          <h1>让产业看得见变化，<br />算得清影响，抓得住机会。</h1>
          <p className="hero-lead">
            大宗智能体连接数据、知识与产业资源，把复杂市场信号转化为可信判断与业务行动，
            同时创造更广泛的社会价值、行业价值与客户价值。
          </p>
          <a className="explore-bar" href="#product" aria-label="探索大宗智能体">
            <span><b>开始探索</b><small>华东热卷累库，采购节奏要不要调整？</small></span>
            <i>↗</i>
          </a>
          <div className="hero-stats" aria-label="产品规划数据">
            <div><strong>104</strong><span>个大宗商品品类规划</span></div>
            <div><strong>23</strong><span>类产业主体服务图谱</span></div>
            <div><strong>6</strong><span>类业务能力接入测试</span></div>
          </div>
        </div>
      </section>

      <section className="value-section section-shell" id="value">
        <div className="section-title centered">
          <span>VALUE FOR A BETTER INDUSTRY</span>
          <h2>智能的意义，不止于效率。</h2>
          <p>从单个企业的经营改善，走向整个产业的协同升级，再服务更稳定、更透明、更高效的实体经济。</p>
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

      <section className="product-section" id="product">
        <div className="section-shell">
          <div className="section-title split">
            <div><span>PRODUCT SYSTEM</span><h2>从市场信号到产业行动，<br />一个入口完成。</h2></div>
            <p>当前版本优先跑通“交互—沉淀—再输出”的最小闭环；高级交易执行能力将根据验证结果逐步开放。</p>
          </div>
          <div className="capability-grid">
            {capabilities.map((capability) => (
              <article className={`capability-card ${capability.featured ? "featured" : ""}`} key={capability.title}>
                <div className="capability-icon">✦</div>
                <span className="capability-tag">{capability.tag}</span>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
                <div className="capability-list">{capability.items.map((item) => <span key={item}>{item}</span>)}</div>
              </article>
            ))}
          </div>

          <div className="agent-panel">
            <div className="agent-panel-copy">
              <span>可信回答，不止一个结论</span>
              <h3>先理解产业逻辑，<br />再给经营建议。</h3>
              <p>智能体会沿着库存、区域价差、供需节奏和企业约束建立分析链路；信息不足时主动反问，避免给出脱离业务条件的答案。</p>
              <div className="panel-chips"><i>快</i><i>准</i><i>可解释</i><i>会反问</i></div>
            </div>
            <div className="conversation-card" aria-label="大宗智能体交互示意">
              <div className="conversation-head"><span><i>AI</i><b>大宗智能体</b></span><em>在线</em></div>
              <div className="question">华东热卷近期库存上升，采购节奏要不要调整？</div>
              <div className="reasoning"><span>分析链路</span><p>库存变化 → 区域价差 → 供需节奏 → 采购约束</p></div>
              <div className="answer"><small>结论先行</small><strong>建议先缩短采购周期，再根据库存拐点分批执行。</strong><p>请补充月均用量、当前库存天数与可接受价格区间，以生成更贴近经营的方案。</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="method-section section-shell" id="method">
        <div className="section-title centered">
          <span>PROFESSIONAL INTELLIGENCE</span>
          <h2>大宗分析不是单点答案，<br />而是一套产业推理方法。</h2>
          <p>用“空间 + 时间 + 要素”组织行业知识，把每一条数据放回产业链、周期和区域流动中理解。</p>
        </div>
        <div className="method-grid">
          {methods.map(([english, title, description, visual], index) => (
            <article className="method-card" key={english}>
              <div className="method-number">0{index + 1}</div>
              <span>{english}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className={`method-visual visual-${index + 1}`}>{visual}</div>
            </article>
          ))}
        </div>
        <div className="analyst-model">
          <div><span>ANALYST LEVEL MODEL</span><h3>让专业能力持续沉淀，<br />从数据执行走向生态设计。</h3></div>
          <ol>
            <li className="active"><b>L1</b><span>数据执行者</span><small>数据查询与标准输出</small></li>
            <li className="active"><b>L2</b><span>逻辑构建者</span><small>供需与产业关系推理</small></li>
            <li><b>L3</b><span>策略掌舵者</span><small>平衡表与策略建议</small></li>
            <li><b>L4</b><span>框架定调者</span><small>宏观产业微观融合</small></li>
            <li><b>L5</b><span>生态设计者</span><small>企业综合解决方案</small></li>
          </ol>
        </div>
      </section>

      <section className="journey-section" id="scenarios">
        <div className="section-shell">
          <div className="section-title split light">
            <div><span>ONE BUSINESS JOURNEY</span><h2>围绕真实经营任务，<br />贯穿业务全过程。</h2></div>
            <p>不是孤立堆叠 AI 功能，而是让每一次市场发现都能沿着分析、策略、商机、交易与履约继续向前。</p>
          </div>
          <div className="journey-track">
            {journey.map(([number, title, description]) => (
              <article key={number}><b>{number}</b><h3>{title}</h3><p>{description}</p></article>
            ))}
          </div>
          <div className="role-grid">
            {roleCards.map(([role, goal, output]) => (
              <article key={role}><span>{role}</span><h3>{goal}</h3><p>{output}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="coverage-section section-shell">
        <div className="coverage-hero">
          <div className="coverage-copy"><span>INDUSTRY COVERAGE BLUEPRINT</span><h2>一套底座，<br />服务更广泛的产业主体。</h2><p>产品按照通用能力先行、重点品类验证、数据与产业资源逐步贯通的路径建设。</p></div>
          <div className="coverage-numbers"><div><strong>104</strong><span>品类规划</span></div><div><strong>6</strong><span>产业板块</span></div><div><strong>23</strong><span>类产业主体</span></div></div>
        </div>
        <p className="coverage-note">“品类规划”不等同于所有品类均已完成全量数据与交易资源接入；具体能力以实际测试与发布版本为准。</p>
      </section>

      <section className="roadmap-section section-shell" id="roadmap">
        <div className="section-title split">
          <div><span>PRODUCT ROADMAP</span><h2>从可用，到好用，<br />再到价值闭环。</h2></div>
          <p>每一个版本只验证一个最关键的问题。以下节点依据 2026 年 7 月项目资料整理，后续以实际发布安排为准。</p>
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

      <section className="contact-section" id="contact">
        <div className="contact-glow" />
        <div className="section-shell contact-inner">
          <span>WANLIANYIDA · BULK INTELLIGENCE</span>
          <h2>让专业能力成为产业共同的智能生产力。</h2>
          <p>欢迎围绕产品内测、数据能力、产业场景与商机撮合展开合作。</p>
          <div className="contact-actions"><a href="#top">返回顶部 <i>↑</i></a><div><span>产品内测</span><span>产业共创</span><span>能力接入</span></div></div>
        </div>
      </section>

      <footer>
        <div className="section-shell footer-inner"><div><strong>万联易达 · 大宗智能事业群</strong><span>大宗行业的 AI 入口</span></div><p>内容依据项目历次汇报及 7.31 MVP 需求资料整理 · 数据与路线截至 2026 年 7 月</p></div>
      </footer>
    </main>
  );
}
