const capabilityGroups = [
  { index: "01", title: "数据智能体", english: "DATA AGENT", status: "内测核心", description: "把行情、资讯、政策与研报放进同一个对话入口，先给结论，再展开依据。", items: ["AI 行情问答", "资讯与政策解读", "研报与深度分析", "价格趋势判断"] },
  { index: "02", title: "撮合智能体", english: "MATCHING AGENT", status: "初步贯通", description: "把自然语言里的采购与销售需求结构化，形成匹配建议、匹配理由与可追踪商机。", items: ["需求结构化", "供需资源匹配", "匹配理由解释", "商机沉淀与跟踪"] },
  { index: "03", title: "统一交互底座", english: "AGENT FOUNDATION", status: "持续增强", description: "用多轮对话承载业务，在互动中沉淀画像、观点、需求与内容资产。", items: ["统一 AI 入口", "上下文记忆", "主动反问补全", "内容再输出与分享"] },
];
const journey = [["01", "发现市场", "查行情 · 看资讯 · 读政策"], ["02", "分析判断", "看研报 · 识风险 · 找驱动"], ["03", "制定策略", "判趋势 · 定时机 · 做方案"], ["04", "匹配商机", "发需求 · 找资源 · 看理由"], ["05", "推进交易", "询报价 · 比方案 · 跟进度"], ["06", "履约复盘", "盯状态 · 预警异常 · 评效果"]];
const roles = [["供应端", "稳生产、控成本、保利润", "产能与成本模型 · 库存预警"], ["贸易端", "抓价差、管库存、快周转", "基差监测 · 商机撮合"], ["需求端", "保供、降本、优化采购", "采购节点 · 分批策略"], ["金融端", "看资产、控风险、提效率", "贸易背景 · 质押风控"], ["研究与治理", "统一数据、辅助研判", "专题研究 · 运行监测"]];
const categories: [string, number][] = [["农产品", 28], ["化工品", 27], ["有色及贵金属", 19], ["特色品种", 12], ["黑色及铁合金", 10], ["能源类", 8]];
const levels = [["L1", "数据执行者", "准确完成数据查询、整理与标准化输出"], ["L2", "逻辑构建者", "串联供需、库存、利润与区域关系"], ["L3", "策略掌舵者", "构建平衡表，形成半定制策略建议"], ["L4", "框架定调者", "融合宏观、产业与微观博弈"], ["L5", "生态设计者", "组织跨领域企业综合解决方案"]];

export default function Home() {
  return <main>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="返回首页"><span className="brand-mark" aria-hidden="true">W</span><span><strong>万联易达</strong><small>WANLIANYIDA</small></span></a>
      <nav aria-label="页面导航"><a href="#product">产品能力</a><a href="#method">专业方法</a><a href="#scenarios">产业场景</a><a href="#roadmap">演进路线</a></nav>
      <a className="header-cta" href="#contact">合作了解 <span>↗</span></a>
    </header>

    <section className="hero" id="top">
      <div className="hero-glow hero-glow-one" /><div className="hero-glow hero-glow-two" />
      <div className="hero-grid">
        <div className="hero-copy reveal">
          <div className="eyebrow light"><span>2026.07.31 MVP 内测</span><i /><span>大宗行业的 AI 入口</span></div>
          <h1>先读懂市场，<br />再把判断变成<span>行动。</span></h1>
          <p className="hero-lead">大宗智能体连接行情、资讯、研报与商机，让采购经理、销售经理、交易员、研究员和经营管理者，在一个入口完成从发现市场到推进交易的关键动作。</p>
          <div className="hero-actions"><a className="primary-button" href="#product">了解产品能力 <span>↓</span></a><a className="text-button" href="#roadmap">查看版本路线</a></div>
          <div className="hero-metrics" aria-label="内测指标"><div><strong>≤2秒</strong><span>简单问题响应</span></div><div><strong>≤10秒</strong><span>复杂问题响应</span></div><div><strong>6类</strong><span>业务能力已接入测试</span></div></div>
          <p className="metric-note">响应速度为 7.31 内测方案目标口径，实际体验以测试环境为准。</p>
        </div>
        <div className="agent-demo reveal delay-1" aria-label="大宗智能体交互示意">
          <div className="demo-topbar"><div className="demo-title"><span className="demo-logo">AI</span><span><strong>大宗智能体</strong><small>体验示意</small></span></div><span className="online"><i /> 在线</span></div>
          <div className="demo-body">
            <div className="user-query">华东热卷近期库存上升，采购节奏要不要调整？</div>
            <div className="thinking-row"><span className="spark">✦</span><div><strong>正在建立分析链路</strong><p>库存变化 → 区域价差 → 供需节奏 → 采购策略</p></div></div>
            <div className="analysis-card"><div className="analysis-head"><span>结论先行</span><b>需补充企业信息</b></div><h3>建议先缩短采购周期，再根据库存拐点分批执行。</h3><div className="signal-list"><div><span>01</span><p><b>库存</b> 关注累库速度是否连续放大</p></div><div><span>02</span><p><b>区域</b> 对比华东与北方到货成本变化</p></div><div><span>03</span><p><b>执行</b> 避免一次性锁量，保留价格弹性</p></div></div></div>
            <div className="follow-up"><span>为了给出更贴近经营的方案：</span>请补充月均用量、当前库存天数与可接受价格区间。</div>
          </div>
          <div className="demo-footer"><span>快 · 准 · 格式可控 · 会反问</span><button type="button" aria-label="发送问题">↑</button></div>
        </div>
      </div>
      <div className="hero-loop" aria-label="产品闭环"><span>统一入口</span><b>→</b><span>业务交互</span><b>→</b><span>结构化沉淀</span><b>→</b><span>智能再输出</span></div>
    </section>

    <section className="manifesto section-shell">
      <div className="section-index">01 / WHY NOW</div>
      <div className="manifesto-content"><p className="kicker">不是再做一个行情查询工具</p><h2>大宗商品缺的不是信息，<br />而是把信息变成<span>决策与交易</span>的效率。</h2>
        <div className="problem-grid"><article><span>信息散</span><h3>行情、政策、研报分散在多个入口</h3><p>用户需要反复检索、交叉验证，关键变化难以及时形成统一判断。</p></article><article><span>分析慢</span><h3>高频工作依赖人工整理与模板生产</h3><p>初级分析工作重复度高，专业能力难以规模化复制到更多客户。</p></article><article><span>链路断</span><h3>看懂行情之后，仍要自己寻找资源</h3><p>内容与商机割裂，观点难沉淀、需求难结构化、成交过程难跟踪。</p></article></div>
      </div>
    </section>

    <section className="product-section" id="product"><div className="section-shell">
      <div className="section-heading inverted"><div><div className="section-index">02 / PRODUCT</div><p className="kicker">一个入口 · 三层能力</p><h2>让市场判断与商机行动发生在同一条链路上。</h2></div><p>当前版本优先跑通“交互—沉淀—再输出”的最小闭环；高级交易执行能力将按验证结果逐步开放。</p></div>
      <div className="capability-stack">{capabilityGroups.map(group => <article className="capability-row" key={group.index}><span className="capability-index">{group.index}</span><div className="capability-name"><span>{group.english}</span><h3>{group.title}</h3></div><p>{group.description}</p><div className="capability-items"><b>{group.status}</b>{group.items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div>
      <div className="journey-wrap"><div className="journey-intro"><span>ONE BUSINESS JOURNEY</span><h3>从发现市场，到履约复盘</h3><p>围绕真实业务角色的连续任务设计，而不是孤立堆叠 AI 功能。</p></div><div className="journey-line">{journey.map(([number,title,description]) => <div className="journey-step" key={number}><b>{number}</b><h4>{title}</h4><p>{description}</p></div>)}</div></div>
    </div></section>

    <section className="method-section section-shell" id="method">
      <div className="section-heading"><div><div className="section-index">03 / INTELLIGENCE</div><p className="kicker">专业能力的骨架</p><h2>不只会回答，更要沿着产业逻辑推理。</h2></div><p>以“空间 + 时间 + 要素”三维逻辑组织大宗商品知识，把单点数据放回产业链、周期与区域流动中理解。</p></div>
      <div className="method-grid">
        <article className="method-card space-card"><div className="method-top"><span>SPACE</span><b>01</b></div><h3>空间逻辑</h3><p>理解资源地、制造集群与消费市场的错配，把物流成本、运力和区域价差纳入判断。</p><div className="map-logic" aria-hidden="true"><div className="map-point west">资源</div><div className="map-route"><i /><i /><i /></div><div className="map-point east">需求</div></div><small>资源地 → 物流走廊 → 消费地</small></article>
        <article className="method-card time-card"><div className="method-top"><span>TIME</span><b>02</b></div><h3>时间逻辑</h3><p>同时观察短周期高频异动、中周期库存利润与长周期产能政策，避免只看一个时间截面。</p><div className="cycle-bars" aria-hidden="true"><i><span>日 / 周</span></i><i><span>月 / 季</span></i><i><span>年 / 周期</span></i></div></article>
        <article className="method-card factor-card"><div className="method-top"><span>FACTORS</span><b>03</b></div><h3>要素逻辑</h3><p>将产、销、存、运、需、利润、成本与宏观政策串成可解释的传导链路。</p><div className="factor-cloud" aria-label="分析要素">{['产','销','存','运','需','利','本','政'].map(item => <span key={item}>{item}</span>)}</div></article>
      </div>
      <div className="expert-ladder"><div className="ladder-copy"><span>ANALYST LEVEL MODEL</span><h3>能力不是一次跃迁，<br />而是沿分析师等级持续进化。</h3><p>当前内测目标聚焦 L1—L2：准确获取数据、构建基础逻辑、完成标准化输出；更高等级能力坚持“AI 辅助 + 专家校验”。</p></div><div className="levels">{levels.map(([level,name,description], index) => <div className={`level ${index < 2 ? "active" : ""}`} key={level}><b>{level}</b><div><h4>{name}</h4><p>{description}</p></div><span>{index < 2 ? "当前重点" : "持续进化"}</span></div>)}</div></div>
    </section>

    <section className="scenario-section" id="scenarios"><div className="section-shell">
      <div className="section-heading"><div><div className="section-index">04 / SCENARIOS</div><p className="kicker">服务真实产业角色</p><h2>同一套底座，为不同经营目标给出不同答案。</h2></div><p>从供应、贸易与需求三大实体产业角色出发，逐步延伸到金融、流通、研究与治理场景。</p></div>
      <div className="role-table">{roles.map(([role,goal,output], index) => <article key={role}><span>{String(index + 1).padStart(2, '0')}</span><h3>{role}</h3><p>{goal}</p><b>{output}</b></article>)}</div>
      <div className="coverage-grid"><div className="coverage-copy"><span>INDUSTRY COVERAGE BLUEPRINT</span><strong>104</strong><h3>个大宗商品品类规划</h3><p>覆盖六大产业板块。产品按通用能力先行、重点品类验证、数据与交易资源逐步贯通的路径建设。</p><div className="coverage-note">“品类规划”不等同于所有品类均已完成全量数据与交易资源接入。</div></div><div className="category-bars" aria-label="品类规划分布">{categories.map(([name,value]) => <div className="category-row" key={name}><span>{name}</span><div><i style={{width: `${value / 28 * 100}%`}} /></div><b>{value}</b></div>)}<div className="subject-count"><strong>23</strong><span>类产业主体服务图谱</span><p>从核心实体产业到金融资本、流通服务、治理监管与绿色资源端。</p></div></div></div>
    </div></section>

    <section className="roadmap-section section-shell" id="roadmap">
      <div className="section-heading"><div><div className="section-index">05 / ROADMAP</div><p className="kicker">从可用，到好用，再到价值闭环</p><h2>每一个版本，只验证一个最关键的问题。</h2></div><p>路线图为 2026 年 7 月项目资料中的计划口径，后续节点以实际产品发布安排为准。</p></div>
      <div className="roadmap-list">
        <article className="roadmap-item current"><div className="roadmap-date"><b>07.31</b><span>内测版本</span></div><div className="roadmap-main"><span>01 · 能用</span><h3>智能问答工具</h3><p>跑通 AI 核心交互，验证用户是否愿意通过一个入口完成高频业务动作。</p></div><ul><li>快、准、格式可控</li><li>会反问、能沉淀</li><li>万联摩尔 APP 内嵌</li></ul><em>当前阶段</em></article>
        <article className="roadmap-item"><div className="roadmap-date"><b>08.31</b><span>公测计划</span></div><div className="roadmap-main"><span>02 · 好用</span><h3>分析师工作台</h3><p>把对话扩展为资讯中心与商机中心，缩短从判断到行动的链路。</p></div><ul><li>报告自动生成</li><li>资讯栏目化呈现</li><li>商机主动推荐与跟踪</li></ul><em>计划</em></article>
        <article className="roadmap-item"><div className="roadmap-date"><b>09.15</b><span>商业化计划</span></div><div className="roadmap-main"><span>03 · 价值闭环</span><h3>个性化行业产品</h3><p>通过用户画像、内容权益与商机权益，验证可持续商业模式。</p></div><ul><li>千人千面内容</li><li>深度内容权益</li><li>撮合权益与基础收费</li></ul><em>计划</em></article>
        <article className="roadmap-item future"><div className="roadmap-date"><b>FUTURE</b><span>长期方向</span></div><div className="roadmap-main"><span>04 · 专业进化</span><h3>企业综合方案行业专家</h3><p>融合数据、专家经验与产业资源，为企业提供更深的经营与交易解决方案。</p></div><ul><li>企业影响测算</li><li>情景推演与策略优化</li><li>跨环节综合解决方案</li></ul><em>长期方向</em></article>
      </div>
    </section>

    <section className="contact-section" id="contact"><div className="contact-inner section-shell"><span className="contact-overline">WANLIANYIDA · BULK INTELLIGENCE</span><h2>把大宗行业的专业能力，<br />变成每个经营者都能调用的智能生产力。</h2><p>欢迎围绕产品内测、数据能力、商机撮合与产业场景共创展开合作。</p><div className="contact-actions"><a href="#top">返回顶部 <span>↑</span></a><div><span>产品内测</span><span>产业共创</span><span>能力接入</span></div></div></div></section>
    <footer><div className="section-shell footer-inner"><div><strong>万联易达 · 大宗智能事业群</strong><span>大宗行业的 AI 入口</span></div><p>内容依据项目历次汇报及 7.31 MVP 需求资料整理 · 数据与路线截至 2026 年 7 月</p></div></footer>
  </main>;
}
