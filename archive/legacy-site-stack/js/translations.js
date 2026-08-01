// Translation dictionary for multi-language support
const translations = {
  en: {
    // Navigation
    nav_home: 'Home',
    nav_about: 'About',
    nav_services: 'Services',
    nav_portfolio: 'Projects',
    nav_testimonials: 'Testimonials',
    nav_contact: 'Contact',
    // Hero
    hero_title: 'Automation & AI Solutions That Help You Cut Costs, Boost Output, and Grow Without Expanding Your Team',
    hero_subtitle:
      'We help small manufacturers reduce costs, increase output, and automate processes without hiring a full‑time engineering team. We also offer product design, prototyping, and custom AI system development and implementation.',
    hero_cta: 'Book a Free 30-Minute Consultation',
    cta_book: 'Book a Free 30-Minute Consultation',
    // About
    about_title: 'About EngineeringXYZ',
    about_content_1:
      'EngineeringXYZ is a consultancy delivering state-of-the-art engineering and automation solutions tailored to small businesses. Led by Dr. Marco Wu, our mission is to make advanced technology accessible and affordable.',
    about_content_2:
      'With expertise in robotics, mechanical design, AI and data analysis, we help clients innovate, optimize and scale without the overhead of an internal engineering team.',
    about_image_alt: 'Our team of engineers and data scientists collaborating in our innovation lab.',
    about_content_team:
      'Our team includes top engineers, software developers, and data scientists with deep experience in automation, AI, and manufacturing.',
    // Services
    services_title: 'Our Services',
    service_ai_title: 'AI Setup & Automation',
    service_ai_desc:
      'Implement AI-driven solutions from data pipelines to predictive analytics. We design, develop and deploy algorithms that enhance decision-making and automate complex tasks.',
    service_machine_title: 'Machine Design & Prototyping',
    service_machine_desc:
      'Design custom machines and prototypes. From concept to production, we integrate mechanical and electrical components with robotics for precision and efficiency.',
    service_workflow_title: 'Data Workflow & Office Automation',
    service_workflow_desc:
      'Automate your office workflows and data processes to improve productivity and reduce errors. Our programming expertise spans Python, JavaScript and PLC programming.',
    service_optimization_title: 'Operational Optimization',
    service_optimization_desc:
      'Analyze and streamline operations to reduce costs and increase throughput. We apply advanced analytics and root-cause analysis to identify improvements.',
    // Portfolio
    portfolio_title: 'Recent Projects',
    project_voice_title: 'Voice Cloning Project',
    project_voice_desc:
      'Developed a Python-based deep learning system capable of replicating a human voice from audio samples. The project involved data preprocessing, training neural networks and fine-tuning to achieve realistic speech reproduction.',
    project_extension_title: 'Browser Extension Design',
    project_extension_desc:
      'Created a lightweight Chrome extension that enhances productivity by automating repetitive tasks and customizing the browser environment. The project included UX design, manifest configuration and JavaScript implementation.',
    project_stock_title: 'Stock Analysis Program',
    project_stock_desc:
      'Built a stock analysis tool using Python to gather financial data, calculate technical indicators and visualize trends. The program helps investors make informed decisions through automated analysis.',
    project_heart_title: 'Fair & Interpretable Heart-Disease Prediction',
    project_heart_desc:
      'Designed a machine learning pipeline using the UCI Cleveland dataset to predict heart disease while ensuring fairness and interpretability. Techniques included data cleaning, model selection and evaluation of bias metrics.',
    // Additional result descriptions for R&D projects
    project_voice_result:
      'This technology enables personalized voice applications, from assistive devices to entertainment.',
    project_extension_result:
      'The extension boosts productivity by simplifying daily workflows.',
    project_stock_result:
      'This tool empowers investors with data‑driven insights and customizable analysis.',
    project_heart_result:
      'The project demonstrates how AI can deliver accurate predictions while maintaining ethical standards and transparency.',
    project_placeholder_title: 'Custom Automation Solutions',
    project_placeholder_desc:
      'Delivered numerous custom automation projects, from gantry robots to precision pressing machines, improving throughput and accuracy for clients across industries.',

    // New categories for portfolio
    portfolio_category_machine: 'Machine Design Projects',
    portfolio_category_algorithms: 'Algorithm & Programming Projects',
    portfolio_category_research: 'AI & Software R&D Projects',
    // Old machine design projects
    project_coating_title: 'High‑Accuracy Thickness Coatings',
    project_coating_desc:
      'To produce consistent coating thickness on dipped workpieces, we designed a system that combines dual robots, optical micrometers and a heat tunnel. Real‑time measurements enable dynamic adjustment of dipping parameters, delivering precise and repeatable results.',
    project_coating_result:
      'This automated solution improves quality control and production efficiency by eliminating manual measurement errors and maintaining optimal process conditions. This solution reduces labor costs by up to 90%, streamlining operations and ensuring precision.',
    project_gantry_title: 'Production Rate Improvement with Gantry Robot',
    project_gantry_desc:
      'Manual transfer of workpieces between baths was slow and error‑prone. We implemented a gantry robot that automates the movement of parts through multiple process stages, optimizing the sequence for maximum throughput.',
    project_gantry_result:
      'The robotic solution dramatically increased production rate and reduced mistakes, allowing operators to focus on higher‑value tasks. Implemented gantry robot automation reduced labor costs by 80%, significantly increasing throughput.',
    project_schedule_title: 'Customized Scheduling Machine for 3D Scanning',
    project_schedule_desc:
      'Thousands of boxes and fixtures required precise scheduling for 3D scanning. We built a conveyor‑based machine that coordinates with a Nikon X‑ray system, orchestrating the flow of parts to minimize downtime and ensure accurate imaging.',
    project_schedule_result:
      'By automating the scheduling and transfer, the system boosts efficiency and seamlessly integrates scanning into the production workflow. Our solution cut processing time from 2 days to just 40 seconds—an efficiency gain of over 99%.',
    project_press_title: 'Precision Pressing for Ultra‑Thin Wires',
    project_press_desc:
      'Connecting ultra‑thin wires to circuit boards manually resulted in inconsistent quality and high rejection rates. We engineered a precision pressing machine that applies controlled pressure, ensuring reliable contacts every time.',
    project_press_result:
      'The machine improves connection quality and speed while reducing waste and operator fatigue.',
    // Patent information for machine design projects
    project_coating_ip:
      'US Patent Application\u00A0No.\u00A019/262,799 – Dip Coating a Working Wire for a Biological Sensor (filed July\u00A08,\u00A02025)',
    project_gantry_ip:
      'US Patent Application\u00A0No.\u00A019/264,592 – Calibration for a Biological Sensor (filed July\u00A09,\u00A02025)',
    project_schedule_ip:
      'IP application in progress (details confidential)',
    // Algorithm and programming projects
    project_moon_title: 'Earth–Moon Distance Calculation',
    project_moon_desc:
      'Developed a Python algorithm to rapidly calculate the distance between the Earth and the Moon using astronomical data. Leveraging scientific libraries, the program delivers accurate results in a fraction of the time required by manual calculations.',
    project_moon_result:
      'This tool demonstrates how efficient coding can accelerate scientific research while enhancing accuracy.',
    project_macro_title: 'SolidWorks Assembly Macro',
    project_macro_desc:
      'Maintaining thousands of SolidWorks assemblies was time‑consuming and error‑prone. We created a custom macro that automates part updates across multiple files while preserving dependencies and relationships.',
    project_macro_result:
      'The macro reduced weeks of manual work to hours, improving accuracy and freeing engineers to focus on design.',
    project_js_title: 'Custom JavaScript Program',
    project_js_desc:
      'For a research project at Penn State University, we developed a bespoke JavaScript application tailored to the client’s specific requirements. The program provides an intuitive interface and robust functionality not available in off‑the‑shelf software.',
    project_js_result:
      'The solution highlights the versatility of custom code in solving unique problems and enhancing productivity.',
    project_glucose_title: 'Glucose Sensor Algorithm',
    project_glucose_desc:
      'To improve the accuracy and responsiveness of a medical glucose sensor, we developed an algorithm that processes sensor data, filters noise and delivers precise readings in real time.',
    project_glucose_result:
      'This project showcases how algorithm development can enhance medical device performance and patient care.',
    // Testimonials
    testimonials_title: 'What Clients Say',
    test1_quote:
      'Marco developed a creative algorithm for our radio telescope data analysis, reducing runtime by over a factor of 100.',
    test1_author: 'Daniel Marlow',
    test1_role: 'Professor of Physics, Princeton University',
    test2_quote:
      'In my 30+ years of engineering, Marco is one of the best engineers I have worked with. His knowledge, attitude and genuine interest are impressive.',
    test2_author: 'Yuki Kojima',
    test2_role: 'VP of Engineering, Taiyo Circuit Automation',
    test3_quote:
      'Marco designed a mechanical device reducing the number of motors from 49 to 4 while maintaining performance.',
    test3_author: 'Hyeonu Heo',
    test3_role: 'Entrepreneur',

    // Additional testimonials
    test4_quote:
      'Marco always amazed me with his industry insight and unique approaches to solving problems. He is wonderful to work with, and has unique expertise in Python, MATLAB, machine learning and data analysis. He helped me on a National Science Foundation proposal and will be my data scientist if the funding is approved.',
    test4_author: 'Whelton Miller',
    test4_role:
      'Assistant Professor, Loyola University Chicago Stritch School of Medicine',
    test5_quote:
      'I had Marco help me on a JavaScript project. He is very knowledgeable in programming and used only a few hours to complete the task. Marco earns my recommendation.',
    test5_author: 'ViKash Gayah, PhD',
    test5_role: 'Assistant Professor at Penn State University',
    test6_quote:
      'Marco is a great person to work with. He is knowledgeable, determined, hard working, and always strives for the best results he can create. Based on this, I would recommend him and his work in any endeavor he undertakes.',
    test6_author: 'Alston Pike',
    test6_role: 'Electrical Engineer, Progress Rail',
    test7_quote:
      'I asked Marco to create a 3D file to be 3D printed, and he completed it very swiftly and exactly to my specification. I look forward to working again with Marco in the future.',
    test7_author: 'James Coughlan, PhD',
    test7_role: 'Senior Scientist at Smith‑Kettlewell Institute',
    test8_quote:
      'I’ve worked with Marco on multiple projects and he always impresses me with his breadth of technical knowledge and dedication. Marco expertly used SolidWorks and PLC programming to build multiple custom automated manufacturing equipment with stringent specifications for Zense. He demonstrates adaptive and creative thinking to accommodate changing design requirements and technical challenges. Marco would be a great member of any engineering team he joins.',
    test8_author: 'Mark Wu',
    test8_role: 'Director, Zense‑Life',
    // Contact
    contact_title: 'Contact Us',
    contact_intro:
      'Ready to transform your business with engineering excellence? Reach out to us via email or the form below.',
    contact_email_label: 'Email',
    contact_phone_label: 'Phone',
    contact_address_label: 'Address',
    contact_form_name: 'Your Name',
    contact_form_email: 'Your Email',
    contact_form_message: 'Your Message',
    contact_form_submit: 'Send Message',
    // Privacy policy
    privacy_title: 'Privacy Policy',
    privacy_intro: 'Effective date: 2025-09-09',
    privacy_who_title: 'Who we are',
    privacy_who_content:
      'EngineeringXYZ (“we”, “us”) provides engineering consulting services. This policy explains how we collect, use, and protect your information.',
    privacy_collect_title: 'What we collect',
    privacy_collect_list1:
      'Contact details (name, email, phone) you submit via forms',
    privacy_collect_list2: 'Project details you share with us',
    privacy_collect_list3:
      'Website analytics and UTM parameters (for marketing attribution)',
    privacy_why_title: 'Why we collect it',
    privacy_why_list1: 'To respond to inquiries and provide services',
    privacy_why_list2:
      'To improve our site and measure campaign performance',
    privacy_why_list3: 'To comply with legal obligations',
    privacy_store_title: 'How we store & share',
    privacy_store_content:
      'Data is stored on secure services (e.g., Google/Firebase). We do not sell personal data. We may share with service providers (e.g., email delivery, analytics) under data processing agreements.',
    privacy_rights_title: 'Your rights',
    privacy_rights_content:
      'If you are in California (CCPA) or other regions with privacy laws (e.g., GDPR), you may request access, correction, deletion, or restriction of your data. Contact us at <a href="mailto:info@engineeringxyz.com">info@engineeringxyz.com</a>.',
    privacy_cookies_title: 'Cookies & tracking',
    privacy_cookies_content:
      'We use GA4 / Meta Pixel / LinkedIn Insight Tag for analytics and advertising. You can manage cookies in your browser settings.',
    privacy_retention_title: 'Data retention',
    privacy_retention_content:
      'We keep personal data only as long as necessary for the purposes outlined above, unless a longer retention is required by law.',
    privacy_contact_title: 'Contact',
    privacy_contact_content:
      'For privacy questions, email <a href="mailto:info@engineeringxyz.com">info@engineeringxyz.com</a>.',
    // Resume page
    resume_title: 'Submit Your Resume & Portfolio',
    resume_intro:
      'Freelancers and consultants: please use the form below to share your background. This helps us match you to EngineeringXYZ projects (mechanical design, automation, AI/data, PLC/robotics).',
    resume_recommended_title: 'Recommended form fields',
    resume_field_fullname: 'Full name',
    resume_field_email_phone: 'Email (required) & Phone (optional)',
    resume_field_location: 'Location & Timezone (city, country)',
    resume_field_skills:
      'Core skills (e.g., CAD/SolidWorks, fixture/mechanism design, PLC, Python/JS, AI/ML)',
    resume_field_experience:
      'Years of experience (≥10 years preferred for senior roles)',
    resume_field_portfolio_links:
      'Portfolio links (GitHub, Google Drive, website, LinkedIn, Upwork)',
    resume_field_highlights:
      'Sample project highlights (3–5 bullets with outcomes)',
    resume_field_availability: 'Availability & hourly rate',
    resume_field_nda: 'NDA agreement consent checkbox',
    resume_note:
      'Note: Submissions are handled by Google Forms. See our <a href="privacy.html" target="_blank" rel="noopener">privacy policy</a> for details.'
  },
  zh: {
    nav_home: '首頁',
    nav_about: '關於',
    nav_services: '服務',
    nav_portfolio: '專案',
    nav_testimonials: '見證',
    nav_contact: '聯絡',
    hero_title: '自動化與人工智能解決方案，助您降低成本、提升產量並在不擴充團隊的情況下成長',
    hero_subtitle: '我們幫助小型製造商降低成本、提高產量並實現流程自動化，無需聘請全職工程團隊。我們亦提供產品設計、原型製作以及客製化 AI 系統開發與導入。',
    hero_cta: '預約免費30分鐘諮詢',
    cta_book: '預約免費30分鐘諮詢',
    about_title: '關於 EngineeringXYZ',
    about_content_1:
      'EngineeringXYZ 是一家為小型企業提供尖端工程和自動化解決方案的顧問公司。由胡博士帶領，我們的使命是讓先進技術變得易於獲得且價格合理。',
    about_content_2:
      '我們在機器人、機械設計、人工智能和數據分析方面擁有專業知識，幫助客戶創新、優化和擴展，而無需建立內部工程團隊。',
    about_image_alt: '我們的工程師與資料科學家在創新實驗室合作',
    about_content_team: '我們的團隊由頂尖工程師、軟體開發人員與資料科學家組成，在自動化、人工智慧與製造領域擁有豐富經驗。',
    services_title: '我們的服務',
    service_ai_title: '人工智能設定與自動化',
    service_ai_desc:
      '從數據管道到預測分析，我們實施人工智能驅動的解決方案。設計、開發和部署算法，提升決策並自動化複雜任務。',
    service_machine_title: '機械設計與原型製作',
    service_machine_desc:
      '設計定制機器和原型。從概念到生產，我們整合機械和電子元件與機器人，實現精確與效率。',
    service_workflow_title: '數據流程與辦公自動化',
    service_workflow_desc:
      '自動化您的辦公工作流程和數據處理，提高生產力並減少錯誤。我們精通 Python、JavaScript 和 PLC 編程。',
    service_optimization_title: '營運優化',
    service_optimization_desc:
      '分析並精簡營運以降低成本並提高產出。我們運用高級分析和根本原因分析找出改進之處。',
    portfolio_title: '近期專案',
    project_voice_title: '語音克隆專案',
    project_voice_desc:
      '開發了一個基於 Python 的深度學習系統，能從音頻樣本複製人聲。該專案涵蓋資料處理、神經網絡訓練與微調，以實現逼真的語音再現。',
    project_extension_title: '瀏覽器擴展設計',
    project_extension_desc:
      '創建了一個輕量級的 Chrome 擴展，透過自動化重複任務和自訂瀏覽器環境提升生產力。該專案包含 UX 設計、清單配置與 JavaScript 實作。',
    project_stock_title: '股票分析程式',
    project_stock_desc:
      '使用 Python 構建了一個股票分析工具，用於收集財務資料、計算技術指標並視覺化趨勢。該程式可通過自動分析幫助投資者做出明智決策。',
    project_heart_title: '公平且可解釋的心臟病預測',
    project_heart_desc:
      '使用 UCI Cleveland 數據集構建機器學習管道，預測心臟病並兼顧公平性與可解釋性。包含資料清理、模型選擇和偏差指標評估。',
    project_voice_result:
      '這項技術可應用於個人化語音，如輔助設備或娛樂。',
    project_extension_result:
      '這款擴展透過簡化日常流程提高生產力。',
    project_stock_result:
      '此工具為投資者提供數據驅動的洞察和可自訂的分析。',
    project_heart_result:
      '這項專案展示了人工智能如何在保持道德和透明的前提下提供準確預測。',
    project_placeholder_title: '客製化自動化方案',
    project_placeholder_desc:
      '交付了許多客製化的自動化專案，從龍門機器人到精密壓接機，為各行業客戶提升產能與精度。',

    // New categories for portfolio (Chinese translations)
    portfolio_category_machine: '機械設計專案',
    portfolio_category_algorithms: '算法與程式專案',
    portfolio_category_research: '人工智能與軟體研發專案',
    project_coating_title: '高精度塗層厚度',
    project_coating_desc:
      '為了在浸漬工件時獲得一致的塗層厚度，我們設計了一個系統，結合雙機器人、光學測微儀和加熱通道。實時測量可動態調整浸漬參數，確保精確和可重複的結果。',
    project_coating_result:
      '這套自動化解決方案消除人工測量誤差，保持最佳工藝條件，提升品質控制和生產效率。此解決方案將人工成本降低最多90%，簡化操作並確保精準度。',
    project_gantry_title: '龍門機器人提升產能',
    project_gantry_desc:
      '人工在浴槽間搬運工件既緩慢又容易出錯。我們導入龍門機器人，自動移動工件通過多個工序階段，並優化順序以達到最大吞吐量。',
    project_gantry_result:
      '這一機器人解決方案大幅提高了生產率，減少錯誤，使操作員可以專注於更有價值的工作。導入龍門機器人自動化後，勞動成本降低80%，吞吐量大幅提升。',
    project_schedule_title: '3D 掃描排程機器',
    project_schedule_desc:
      '數以千計的箱子和治具需要精確排程進行 3D 掃描。我們打造了一套基於輸送帶的設備，與 Nikon X 射線系統協同工作，調度零件的流動以減少停機並確保精確成像。',
    project_schedule_result:
      '透過自動化排程和轉移，該系統提高效率並順利將掃描整合到生產流程中。我們的解決方案將處理時間從2天縮短到僅40秒——效率提高超過99%。',
    project_press_title: '超細線壓接機',
    project_press_desc:
      '將超細線焊接到電路板上以往人工操作品質不穩且廢品率高。我們設計了一台精密壓接機，施加可控制的壓力，確保每次接觸可靠。',
    project_press_result:
      '該設備改善了連接品質和速度，同時減少浪費並降低操作員疲勞。',
    // 專利資訊
    project_coating_ip:
      '美國專利申請號\u00A019/262,799 – 「Dip Coating a Working Wire for a Biological Sensor」(提交於\u00A02025\u00A0年\u00A07\u00A0月\u00A08\u00A0日)',
    project_gantry_ip:
      '美國專利申請號\u00A019/264,592 – 「Calibration for a Biological Sensor」(提交於\u00A02025\u00A0年\u00A07\u00A0月\u00A09\u00A0日)',
    project_schedule_ip:
      '專利申請進行中\u00A0(細節保密)',
    project_moon_title: '地月距離計算',
    project_moon_desc:
      '開發了一個 Python 算法，利用天文數據迅速計算地球與月球之間的距離。藉助科學庫，該程序在短時間內提供精確結果。',
    project_moon_result:
      '這個工具展示了高效編碼如何加速科學研究並提升準確性。',
    project_macro_title: 'SolidWorks 裝配宏程式',
    project_macro_desc:
      '維護成千上萬的 SolidWorks 裝配檔既耗時又容易出錯。我們建立了一個自定義巨集，自動更新多個檔案中的零件資訊，同時保持依賴關係。',
    project_macro_result:
      '該宏將數週的人工工作縮短至數小時，提高準確性，讓工程師專注於設計。',
    project_js_title: '客製化 JavaScript 程式',
    project_js_desc:
      '為賓州州立大學的研究項目開發了一個專屬的 JavaScript 應用，以滿足特定需求。該程式提供直觀介面和堅實功能，是市售軟體無法提供的。',
    project_js_result:
      '該解決方案展示了客製代碼在解決獨特問題和提升生產力方面的多功能性。',
    project_glucose_title: '葡萄糖感測算法',
    project_glucose_desc:
      '為了提高醫療葡萄糖感測器的準確性和反應速度，我們開發了一個算法，用於處理感測資料、濾除噪音並即時提供精確讀數。',
    project_glucose_result:
      '此項目展示了算法開發如何提升醫療設備性能並增進病患護理。',
    testimonials_title: '客戶心聲',
    test1_quote: 'Marco 為我們的射電望遠鏡資料分析開發了一個創新的算法，將運行時間縮短了 100 倍以上。',
    test1_author: 'Daniel Marlow',
    test1_role: '普林斯頓大學物理教授',
    test2_quote: '在我 30 多年的工程生涯中，Marco 是最出色的工程師之一。他的知識、態度和投入令人印象深刻。',
    test2_author: 'Yuki Kojima',
    test2_role: 'Taiyo Circuit Automation 副總工程師',
    test3_quote: 'Marco 設計了一個機械裝置，將電機數量從 49 個減少到 4 個，仍能達到相同性能。',
    test3_author: 'Hyeonu Heo',
    test3_role: '企業家',

    // Additional testimonials (Chinese translations approximated)
    test4_quote:
      'Marco總是以其行業洞察力和獨特的解決方案讓我驚訝。他工作愉快，在 Python、MATLAB、機器學習與數據分析方面具有獨特專長。他幫助我撰寫國家科學基金會提案，如果獲得資助，他將成為我的數據科學家。',
    test4_author: 'Whelton Miller',
    test4_role: '芝加哥洛約拉大學 Stritch 醫學院助理教授',
    test5_quote:
      '我請 Marco 幫助我完成一個 JavaScript 專案。他在編程方面非常熟練，只用了幾個小時就完成了任務。我強烈推薦他。',
    test5_author: 'ViKash Gayah，博士',
    test5_role: '賓夕法尼亞州立大學助理教授',
    test6_quote:
      'Marco 是一個很棒的合作夥伴。他知識淵博、堅定勤奮，總是致力於創造最好的結果。因此，我會在任何項目中推薦他。',
    test6_author: 'Alston Pike',
    test6_role: 'Progress Rail 電氣工程師',
    test7_quote:
      '我請 Marco 創建一個用於 3D 列印的檔案，他迅速且精準地完成了工作。我期待將來再次與他合作。',
    test7_author: 'James Coughlan，博士',
    test7_role: 'Smith‑Kettlewell 研究所高級科學家',
    test8_quote:
      '我與 Marco 合作了多個專案，他廣泛的技術知識和敬業精神總是讓我印象深刻。他熟練使用 SolidWorks 和 PLC 程式設計，打造符合嚴格規格的自動化設備。他在面對不斷變化的設計需求和技術挑戰時展現出適應性和創造力。Marco 是任何工程團隊的理想成員。',
    test8_author: 'Mark Wu',
    test8_role: 'Zense‑Life 董事',
    contact_title: '聯絡我們',
    contact_intro: '準備好通過卓越工程改變您的業務嗎？歡迎透過電子郵件或下方表單與我們聯繫。',
    contact_email_label: '電子郵件',
    contact_phone_label: '電話',
    contact_address_label: '地址',
    contact_form_name: '您的姓名',
    contact_form_email: '您的電子郵件',
    contact_form_message: '您的訊息',
    contact_form_submit: '送出訊息',
    // Privacy policy
    privacy_title: '隱私政策',
    privacy_intro: '生效日期：2025-09-09',
    privacy_who_title: '關於我們',
    privacy_who_content:
      'EngineeringXYZ（“我們”）提供工程顧問服務。本政策解釋我們如何收集、使用和保護您的資訊。',
    privacy_collect_title: '我們收集的資料',
    privacy_collect_list1: '您透過表單提交的聯繫資訊（姓名、電子郵件、電話）',
    privacy_collect_list2: '您與我們分享的專案細節',
    privacy_collect_list3: '網站分析與 UTM 參數（用於行銷歸因）',
    privacy_why_title: '收集的目的',
    privacy_why_list1: '回覆諮詢並提供服務',
    privacy_why_list2: '改善網站並衡量行銷效益',
    privacy_why_list3: '遵循法律義務',
    privacy_store_title: '如何儲存與分享',
    privacy_store_content:
      '資料儲存於安全服務（例如 Google/Firebase）。我們不出售個人資料。可能與服務提供者（例如電子郵件、分析）在資料處理協議下共享。',
    privacy_rights_title: '您的權利',
    privacy_rights_content:
      '如果您位於加州（CCPA）或其他隱私法區域（如 GDPR），您可以要求存取、更正、刪除或限制您的資料。請聯繫我們：<a href="mailto:info@engineeringxyz.com">info@engineeringxyz.com</a>。',
    privacy_cookies_title: 'Cookie 與追蹤',
    privacy_cookies_content:
      '我們使用 GA4/Meta Pixel/LinkedIn Insight Tag 進行分析與廣告。您可在瀏覽器設定中管理 cookie。',
    privacy_retention_title: '資料保留',
    privacy_retention_content:
      '我們僅在達成上述目的所需期間保留個人資料，除非法律規定更長期限。',
    privacy_contact_title: '聯絡我們',
    privacy_contact_content:
      '如有隱私問題，請寄信至 <a href="mailto:info@engineeringxyz.com">info@engineeringxyz.com</a>。',
    // Resume page
    resume_title: '提交您的履歷與作品集',
    resume_intro:
      '自由工作者與顧問：請使用以下表單分享您的背景，讓我們能根據機械設計、自動化、AI/數據、PLC/機器人等專案需求與您匹配。',
    resume_recommended_title: '建議填寫欄位',
    resume_field_fullname: '姓名',
    resume_field_email_phone: '電子郵件（必填）與電話（選填）',
    resume_field_location: '地點與時區（城市、國家）',
    resume_field_skills:
      '核心技能（例如 CAD/SolidWorks、夾治具/機構設計、PLC、Python/JS、AI/ML）',
    resume_field_experience: '年資（資深職位建議≥10年）',
    resume_field_portfolio_links:
      '作品連結（GitHub、Google Drive、網站、LinkedIn、Upwork）',
    resume_field_highlights: '專案亮點（3–5點，含成果）',
    resume_field_availability: '可投入時段與期望時薪',
    resume_field_nda: 'NDA 同意核取方塊',
    resume_note:
      '注意：提交透過 Google 表單處理。詳情請參閱我們的 <a href="privacy.html" target="_blank" rel="noopener">隱私政策</a>。'
  },
  ko: {
    nav_home: '홈',
    nav_about: '회사 소개',
    nav_services: '서비스',
    nav_portfolio: '프로젝트',
    nav_testimonials: '추천사',
    nav_contact: '연락처',
    hero_title: '자동화 및 AI 솔루션으로 비용을 절감하고 생산량을 높여 팀을 확장하지 않고도 성장하도록 돕습니다',
    hero_subtitle: '우리는 소규모 제조업체가 전담 엔지니어링 팀을 채용하지 않고도 비용을 절감하고 생산량을 늘리며 공정을 자동화할 수 있도록 돕습니다. 또한 제품 설계, 프로토타이핑 및 맞춤형 AI 시스템 개발과 구현을 제공합니다.',
    hero_cta: '무료 30분 상담 예약',
    cta_book: '무료 30분 상담 예약',
    about_title: 'EngineeringXYZ 소개',
    about_content_1:
      'EngineeringXYZ는 중소기업을 위해 최첨단 엔지니어링 및 자동화 솔루션을 제공하는 컨설팅 회사입니다. Marco Wu 박사가 이끄는 우리는 고급 기술을 쉽게 이용하고 저렴하게 만드는 것을 목표로 합니다.',
    about_content_2:
      '로봇, 기계 설계, AI 및 데이터 분석에 대한 전문 지식을 바탕으로 내부 엔지니어링 팀 없이도 고객이 혁신하고 최적화하며 확장할 수 있도록 돕습니다.',
    about_image_alt: '혁신 실험실에서 협업하는 엔지니어와 데이터 과학자',
    about_content_team: '우리 팀은 자동화, AI 및 제조 분야에서 풍부한 경험을 가진 최고의 엔지니어, 소프트웨어 개발자 및 데이터 과학자로 구성되어 있습니다.',
    services_title: '서비스',
    service_ai_title: 'AI 설정 및 자동화',
    service_ai_desc:
      '데이터 파이프라인부터 예측 분석까지 AI 기반 솔루션을 구현합니다. 의사 결정을 향상시키고 복잡한 작업을 자동화하는 알고리즘을 설계, 개발 및 배포합니다.',
    service_machine_title: '기계 설계 및 프로토타입',
    service_machine_desc:
      '맞춤형 기계와 프로토타입을 설계합니다. 개념에서 생산까지 기계와 전자 부품을 로봇과 통합하여 정확성과 효율성을 제공합니다.',
    service_workflow_title: '데이터 워크플로우 및 사무 자동화',
    service_workflow_desc:
      '사무 워크플로우와 데이터 프로세스를 자동화하여 생산성을 높이고 오류를 줄입니다. Python, JavaScript, PLC 프로그래밍에 대한 전문성을 갖추고 있습니다.',
    service_optimization_title: '운영 최적화',
    service_optimization_desc:
      '비용을 줄이고 생산량을 늘리기 위해 운영을 분석하고 간소화합니다. 고급 분석과 근본 원인 분석을 적용하여 개선 사항을 찾습니다.',
    portfolio_title: '최근 프로젝트',
    project_voice_title: '음성 복제 프로젝트',
    project_voice_desc:
      '오디오 샘플에서 인간 음성을 재현할 수 있는 Python 기반 딥 러닝 시스템을 개발했습니다. 데이터 전처리, 신경망 훈련 및 미세 조정이 포함되었습니다.',
    project_extension_title: '브라우저 확장 디자인',
    project_extension_desc:
      '반복 작업을 자동화하고 브라우저 환경을 사용자 지정하여 생산성을 향상시키는 가벼운 Chrome 확장을 제작했습니다. UX 디자인, 매니페스트 구성 및 JavaScript 구현이 포함되었습니다.',
    project_stock_title: '주식 분석 프로그램',
    project_stock_desc:
      'Python을 사용하여 재무 데이터를 수집하고 기술 지표를 계산하며 추세를 시각화하는 주식 분석 도구를 만들었습니다. 자동 분석을 통해 투자자들이 정보에 기반한 결정을 내릴 수 있도록 돕습니다.',
    project_heart_title: '공정하고 해석 가능한 심장 질환 예측',
    project_heart_desc:
      '심장 질환을 공정하고 해석 가능하게 예측하기 위해 UCI Cleveland 데이터셋을 사용하여 머신러닝 파이프라인을 설계했습니다. 데이터 정제, 모델 선택, 편향 지표 평가가 포함되었습니다.',
    project_voice_result:
      '이 기술은 보조 기기에서 엔터테인먼트에 이르기까지 개인화된 음성 응용 프로그램을 가능하게 합니다.',
    project_extension_result:
      '이 확장은 일상 업무를 단순화하여 생산성을 높입니다.',
    project_stock_result:
      '이 도구는 투자자에게 데이터 기반 통찰력과 맞춤형 분석을 제공합니다.',
    project_heart_result:
      '이 프로젝트는 윤리적 기준과 투명성을 유지하면서 AI가 어떻게 정확한 예측을 제공할 수 있는지를 보여줍니다.',
    project_placeholder_title: '맞춤형 자동화 솔루션',
    project_placeholder_desc:
      '갠트리 로봇부터 정밀 압착기까지 다양한 맞춤형 자동화 프로젝트를 수행하여 여러 산업 고객의 생산성과 정확성을 향상시켰습니다.',

    // New categories for portfolio (Korean translations borrowed from English)
    portfolio_category_machine: 'Machine Design Projects',
    portfolio_category_algorithms: 'Algorithm & Programming Projects',
    portfolio_category_research: 'AI & Software R&D Projects',
    project_coating_title: '고정밀 두께 코팅',
    project_coating_desc:
      '잠수식 공작물에서 일정한 코팅 두께를 얻기 위해 우리는 듀얼 로봇, 광학 마이크로미터 및 열 터널을 결합한 시스템을 설계했습니다. 실시간 측정으로 침지 매개변수를 동적으로 조정하여 정밀하고 반복 가능한 결과를 제공합니다.',
    project_coating_result:
      '이 자동화 솔루션은 수동 측정 오류를 제거하고 최적의 공정 조건을 유지하여 품질 관리와 생산 효율을 향상시킵니다. 이 솔루션은 인건비를 최대 90%까지 절감하여 운영을 간소화하고 정밀도를 보장합니다.',
    project_gantry_title: '갠트리 로봇으로 생산율 향상',
    project_gantry_desc:
      '욕조 사이를 수작업으로 이동하는 것은 느리고 오류가 많았습니다. 우리는 여러 공정 단계를 거쳐 부품의 이동을 자동화하고 최대 처리량을 위해 순서를 최적화하는 갠트리 로봇을 구현했습니다.',
    project_gantry_result:
      '이 로봇 솔루션은 생산 속도를 크게 높이고 실수를 줄여 작업자가 더 가치 있는 작업에 집중할 수 있도록 합니다. 갠트리 로봇 자동화를 도입하여 인건비를 80% 절감하고 처리량을 크게 증가시켰습니다.',
    project_schedule_title: '3D 스캐닝을 위한 맞춤형 스케줄링 기계',
    project_schedule_desc:
      '수천 개의 상자와 고정구가 3D 스캐닝을 위해 정확한 스케줄링을 필요로 했습니다. 우리는 니콘 X선 시스템과 협력하여 부품의 흐름을 조율하여 가동 중단을 최소화하고 정확한 이미지를 보장하는 컨베이어 기반 장치를 구축했습니다.',
    project_schedule_result:
      '스케줄링과 전송을 자동화함으로써 시스템은 효율성을 높이고 생산 워크플로에 스캐닝을 원활하게 통합합니다. 우리 솔루션으로 처리 시간이 2일에서 단 40초로 줄어 효율이 99% 이상 향상되었습니다.',
    project_press_title: '초박형 와이어용 정밀 프레스',
    project_press_desc:
      '초박형 와이어를 회로 기판에 수동으로 연결하면 품질이 일관되지 않고 불량률이 높았습니다. 우리는 제어된 압력을 가해 매번 신뢰할 수 있는 접촉을 보장하는 정밀 프레스 기계를 설계했습니다.',
    project_press_result:
      '이 기계는 연결 품질과 속도를 향상시키는 동시에 폐기물과 작업자의 피로를 줄입니다.',
    // 특허 정보
    project_coating_ip:
      '미국 특허 출원 번호 19/262,799 – “Dip Coating a Working Wire for a Biological Sensor” (출원일: 2025년 7월 8일)',
    project_gantry_ip:
      '미국 특허 출원 번호 19/264,592 – “Calibration for a Biological Sensor” (출원일: 2025년 7월 9일)',
    project_schedule_ip:
      '특허 출원 진행 중 (세부 정보 비공개)',
    project_moon_title: '지구-달 거리 계산',
    project_moon_desc:
      '천문 데이터를 이용해 지구와 달 사이의 거리를 신속하게 계산하는 Python 알고리즘을 개발했습니다. 과학 라이브러리를 활용하여 수동 계산보다 훨씬 짧은 시간에 정확한 결과를 제공합니다.',
    project_moon_result:
      '이 도구는 효율적인 코딩이 과학 연구를 가속화하고 정확성을 향상시킬 수 있음을 보여줍니다.',
    project_macro_title: 'SolidWorks 조립 매크로',
    project_macro_desc:
      '수천 개의 SolidWorks 조립 파일을 유지하는 데 많은 시간과 오류가 발생했습니다. 우리는 종속성과 관계를 유지하면서 여러 파일에서 부품 업데이트를 자동화하는 맞춤형 매크로를 만들었습니다.',
    project_macro_result:
      '이 매크로는 몇 주의 수작업을 몇 시간으로 단축하여 정확성을 향상시키고 엔지니어가 설계에 집중할 수 있게 했습니다.',
    project_js_title: '맞춤형 JavaScript 프로그램',
    project_js_desc:
      '펜실베이니아 주립대학교의 연구 프로젝트를 위해 클라이언트의 특정 요구 사항에 맞춘 맞춤형 JavaScript 응용 프로그램을 개발했습니다. 이 프로그램은 시중 소프트웨어에서 제공되지 않는 직관적인 인터페이스와 강력한 기능을 제공합니다.',
    project_js_result:
      '이 솔루션은 고유한 문제를 해결하고 생산성을 향상시키는 데 있어서 맞춤 코드의 다양성을 강조합니다.',
    project_glucose_title: '포도당 센서 알고리즘',
    project_glucose_desc:
      '의료용 포도당 센서의 정확성과 반응성을 향상시키기 위해 우리는 센서 데이터를 처리하고 잡음을 필터링하며 실시간으로 정확한 값을 제공하는 알고리즘을 개발했습니다.',
    project_glucose_result:
      '이 프로젝트는 알고리즘 개발이 의료 기기의 성능과 환자 케어를 향상시킬 수 있음을 보여줍니다.',
    testimonials_title: '고객 후기',
    test1_quote: 'Marco는 우리 전파망원경 데이터 분석을 위해 창의적인 알고리즘을 개발해 실행 시간을 100배 이상 단축했습니다.',
    test1_author: 'Daniel Marlow',
    test1_role: '프린스턴 대학교 물리학 교수',
    test2_quote: '30년 이상의 엔지니어링 경력에서 Marco는 최고 수준의 엔지니어입니다. 그의 지식과 태도, 헌신에 감명을 받았습니다.',
    test2_author: 'Yuki Kojima',
    test2_role: 'Taiyo Circuit Automation 부사장',
    test3_quote: 'Marco는 49개의 모터를 4개로 줄인 기계 장치를 설계하면서도 동일한 성능을 유지했습니다.',
    test3_author: 'Hyeonu Heo',
    test3_role: '기업가',

    // Additional testimonials (Korean translations approximated)
    test4_quote:
      'Marco는 업계 통찰력과 독창적인 문제 해결 방식으로 항상 저를 놀라게 했습니다. 그는 함께 일하기 좋은 사람이며, Python, MATLAB, 머신러닝, 데이터 분석에 대한 독특한 전문성을 가지고 있습니다. 그는 미국 과학재단 제안서 작성을 도와주었고, 자금이 승인된다면 제 데이터 과학자가 될 것입니다.',
    test4_author: '웰턴 밀러',
    test4_role: '로욜라 시카고 대학 의과대학 조교수',
    test5_quote:
      '저는 Marco에게 JavaScript 프로젝트를 도와 달라고 요청했습니다. 그는 프로그래밍에 매우 능숙하여 몇 시간 만에 작업을 완료했습니다. 저는 그를 추천합니다.',
    test5_author: '비카시 가야, 박사',
    test5_role: '펜실베이니아 주립대학교 조교수',
    test6_quote:
      'Marco는 함께 일하기에 훌륭한 사람입니다. 그는 지식이 풍부하고, 결단력 있으며, 근면 성실합니다. 항상 최상의 결과를 만들기 위해 노력합니다. 따라서 저는 어떤 업무에서도 그의 일을 추천합니다.',
    test6_author: '알스턴 파이크',
    test6_role: '프로그레스 레일 전기 엔지니어',
    test7_quote:
      '저는 Marco에게 3D 프린트를 위한 파일을 만들어 달라고 요청했는데, 그는 매우 빠르게 그리고 정확하게 완성했습니다. 앞으로 다시 함께 일하기를 기대합니다.',
    test7_author: '제임스 코글란, 박사',
    test7_role: '스미스‑케틀웰 연구소 선임 과학자',
    test8_quote:
      '저는 Marco와 여러 프로젝트를 수행했으며 그는 폭넓은 기술 지식과 헌신으로 항상 저를 놀라게 합니다. 그는 SolidWorks와 PLC 프로그래밍을 능숙하게 사용해 까다로운 요구사항을 가진 맞춤 자동화 장비를 제작했습니다. 변화하는 설계 요구와 기술적 도전에 대처할 때 적응성과 창의성을 보여줍니다. Marco는 어떤 엔지니어링 팀에서도 훌륭한 구성원이 될 것입니다.',
    test8_author: 'Mark Wu',
    test8_role: 'Zense‑Life 이사',
    contact_title: '문의하기',
    contact_intro: '최고의 엔지니어링으로 비즈니스를 혁신하고 싶으신가요? 이메일이나 아래 양식을 통해 문의하세요.',
    contact_email_label: '이메일',
    contact_phone_label: '전화',
    contact_address_label: '주소',
    contact_form_name: '이름',
    contact_form_email: '이메일',
    contact_form_message: '메시지',
    contact_form_submit: '메시지 보내기',
    // Privacy policy
    privacy_title: '개인정보 처리방침',
    privacy_intro: '발효 날짜: 2025-09-09',
    privacy_who_title: '회사 소개',
    privacy_who_content:
      'EngineeringXYZ(“저희”)는 엔지니어링 컨설팅 서비스를 제공합니다. 이 정책은 정보를 수집, 사용 및 보호하는 방법을 설명합니다.',
    privacy_collect_title: '수집하는 정보',
    privacy_collect_list1: '양식을 통해 제출하신 연락처 정보(이름, 이메일, 전화번호)',
    privacy_collect_list2: '저희에게 공유하는 프로젝트 세부정보',
    privacy_collect_list3: '웹사이트 분석 및 마케팅 추적용 UTM 매개변수',
    privacy_why_title: '수집하는 이유',
    privacy_why_list1: '문의에 응답하고 서비스를 제공하기 위해',
    privacy_why_list2: '사이트 개선 및 캠페인 성과 측정을 위해',
    privacy_why_list3: '법적 의무를 준수하기 위해',
    privacy_store_title: '저장 및 공유 방법',
    privacy_store_content:
      '데이터는 안전한 서비스(예: Google/Firebase)에 저장됩니다. 개인 정보를 판매하지 않습니다. 서비스 제공업체(예: 이메일 전달, 분석)와 데이터 처리 계약 하에 공유할 수 있습니다.',
    privacy_rights_title: '귀하의 권리',
    privacy_rights_content:
      '캘리포니아(CCPA)나 GDPR과 같은 개인정보 보호 법률이 있는 지역에 거주하는 경우, 데이터 접근, 수정, 삭제 또는 제한을 요청할 수 있습니다. <a href="mailto:info@engineeringxyz.com">info@engineeringxyz.com</a> 으로 연락 주세요.',
    privacy_cookies_title: '쿠키 및 추적',
    privacy_cookies_content:
      'GA4 / Meta Pixel / LinkedIn Insight Tag를 사용하여 분석 및 광고를 합니다. 브라우저 설정에서 쿠키를 관리할 수 있습니다.',
    privacy_retention_title: '데이터 보관 기간',
    privacy_retention_content:
      '위 목적에 필요한 기간 동안만 개인 데이터를 보관하며, 법에서 더 긴 보관을 요구하는 경우를 제외합니다.',
    privacy_contact_title: '문의',
    privacy_contact_content:
      '개인 정보 보호 관련 문의는 <a href="mailto:info@engineeringxyz.com">info@engineeringxyz.com</a> 으로 연락 주세요.',
    // Resume page
    resume_title: '이력서 및 포트폴리오 제출',
    resume_intro:
      '프리랜서 및 컨설턴트 여러분: 아래 양식을 사용하여 배경 정보를 공유해주세요. 기계 설계, 자동화, AI/데이터, PLC/로보틱스 등 EngineeringXYZ 프로젝트에 적합한 분을 찾는 데 도움이 됩니다.',
    resume_recommended_title: '권장 입력 항목',
    resume_field_fullname: '성명',
    resume_field_email_phone: '이메일(필수) 및 전화번호(선택)',
    resume_field_location: '위치 및 시간대(도시, 국가)',
    resume_field_skills:
      '핵심 기술(예: CAD/SolidWorks, 지그/메커니즘 설계, PLC, Python/JS, AI/ML)',
    resume_field_experience: '경력 연수(시니어 역할은 10년 이상 권장)',
    resume_field_portfolio_links:
      '포트폴리오 링크(GitHub, Google Drive, 웹사이트, LinkedIn, Upwork)',
    resume_field_highlights: '주요 프로젝트 하이라이트(3–5개, 결과 포함)',
    resume_field_availability: '가능 근무 시간 및 시간당 요금',
    resume_field_nda: 'NDA 동의 체크박스',
    resume_note:
      '참고: 제출은 Google Forms를 통해 처리됩니다. 자세한 내용은 <a href="privacy.html" target="_blank" rel="noopener">개인정보 처리방침</a>을 참조하십시오.'
  },
  es: {
    nav_home: 'Inicio',
    nav_about: 'Acerca de',
    nav_services: 'Servicios',
    nav_portfolio: 'Proyectos',
    nav_testimonials: 'Testimonios',
    nav_contact: 'Contacto',
    hero_title: 'Soluciones de automatización e IA que te ayudan a reducir costos, aumentar la producción y crecer sin ampliar tu equipo',
    hero_subtitle:
      'Ayudamos a los pequeños fabricantes a reducir costos, aumentar la producción y automatizar procesos sin contratar un equipo de ingeniería a tiempo completo. También ofrecemos diseño de productos, creación de prototipos y desarrollo e implementación de sistemas de IA a medida.',
    hero_cta: 'Reserva una consulta gratuita de 30 minutos',
    cta_book: 'Reserva una consulta gratuita de 30 minutos',
    about_title: 'Acerca de EngineeringXYZ',
    about_content_1:
      'EngineeringXYZ es una consultoría que ofrece soluciones avanzadas de ingeniería y automatización adaptadas a pequeñas empresas. Dirigida por el Dr. Marco Wu, nuestra misión es hacer que la tecnología avanzada sea accesible y asequible.',
    about_content_2:
      'Con experiencia en robótica, diseño mecánico, IA y análisis de datos, ayudamos a nuestros clientes a innovar, optimizar y escalar sin necesidad de un equipo interno de ingeniería.',
    about_image_alt: 'Nuestro equipo de ingenieros y científicos de datos colaborando en nuestro laboratorio de innovación',
    about_content_team:
      'Nuestro equipo incluye a ingenieros de primera, desarrolladores de software y científicos de datos con amplia experiencia en automatización, inteligencia artificial y manufactura.',
    services_title: 'Nuestros Servicios',
    service_ai_title: 'Implementación de IA y Automatización',
    service_ai_desc:
      'Implementamos soluciones impulsadas por IA desde flujos de datos hasta análisis predictivos. Diseñamos, desarrollamos y desplegamos algoritmos que mejoran la toma de decisiones y automatizan tareas complejas.',
    service_machine_title: 'Diseño y Prototipado de Máquinas',
    service_machine_desc:
      'Diseñamos máquinas y prototipos a medida. Desde el concepto hasta la producción, integramos componentes mecánicos y eléctricos con robótica para lograr precisión y eficiencia.',
    service_workflow_title: 'Flujo de Datos y Automatización de Oficinas',
    service_workflow_desc:
      'Automatizamos sus flujos de trabajo y procesos de datos para mejorar la productividad y reducir errores. Nuestra experiencia abarca programación en Python, JavaScript y PLC.',
    service_optimization_title: 'Optimización Operativa',
    service_optimization_desc:
      'Analizamos y simplificamos las operaciones para reducir costos y aumentar el rendimiento. Aplicamos análisis avanzados y análisis de causa raíz para identificar mejoras.',
    portfolio_title: 'Proyectos Recientes',
    project_voice_title: 'Proyecto de Clonación de Voz',
    project_voice_desc:
      'Desarrollamos un sistema de aprendizaje profundo en Python capaz de replicar una voz humana a partir de muestras de audio. El proyecto incluyó procesamiento de datos, entrenamiento de redes neuronales y ajuste fino para lograr una reproducción de voz realista.',
    project_extension_title: 'Diseño de Extensión de Navegador',
    project_extension_desc:
      'Creamos una extensión ligera de Chrome que mejora la productividad al automatizar tareas repetitivas y personalizar el entorno del navegador. El proyecto incluyó diseño UX, configuración del manifiesto e implementación en JavaScript.',
    project_stock_title: 'Programa de Análisis de Acciones',
    project_stock_desc:
      'Construimos una herramienta de análisis bursátil utilizando Python para recopilar datos financieros, calcular indicadores técnicos y visualizar tendencias. El programa ayuda a los inversores a tomar decisiones informadas mediante análisis automatizados.',
    project_heart_title: 'Predicción de Enfermedad Cardíaca Justa e Interpretable',
    project_heart_desc:
      'Diseñamos una canalización de aprendizaje automático utilizando el conjunto de datos UCI Cleveland para predecir enfermedades cardíacas garantizando equidad e interpretabilidad. Las técnicas incluyeron limpieza de datos, selección de modelos y evaluación de métricas de sesgo.',
    project_voice_result:
      'Esta tecnología permite aplicaciones de voz personalizadas, desde dispositivos de asistencia hasta entretenimiento.',
    project_extension_result:
      'La extensión mejora la productividad al simplificar las tareas diarias.',
    project_stock_result:
      'Esta herramienta empodera a los inversores con conocimientos basados en datos y análisis personalizables.',
    project_heart_result:
      'El proyecto demuestra cómo la IA puede ofrecer predicciones precisas manteniendo estándares éticos y transparencia.',
    project_placeholder_title: 'Soluciones de Automatización Personalizadas',
    project_placeholder_desc:
      'Entregamos numerosos proyectos de automatización personalizados, desde robots de pórtico hasta máquinas de prensado de precisión, mejorando la producción y la precisión para clientes de diversas industrias.',

    // New categories for portfolio (Spanish, using English labels for brevity)
    portfolio_category_machine: 'Machine Design Projects',
    portfolio_category_algorithms: 'Algorithm & Programming Projects',
    portfolio_category_research: 'AI & Software R&D Projects',
    project_coating_title: 'Recubrimientos de alta precisión',
    project_coating_desc:
      'Para obtener un espesor de recubrimiento uniforme en piezas sumergidas, diseñamos un sistema que combina robots dobles, micrómetros ópticos y un túnel de calor. Las mediciones en tiempo real permiten ajustar dinámicamente los parámetros de inmersión, proporcionando resultados precisos y repetibles.',
    project_coating_result:
      'Esta solución automatizada mejora el control de calidad y la eficiencia de producción al eliminar los errores de medición manual y mantener condiciones óptimas de proceso. Esta solución reduce los costos de mano de obra hasta en un 90 %, agilizando las operaciones y garantizando la precisión.',
    project_gantry_title: 'Mejora de la tasa de producción con robot de pórtico',
    project_gantry_desc:
      'El traslado manual de piezas entre baños era lento y propenso a errores. Implementamos un robot de pórtico que automatiza el movimiento de las piezas a través de múltiples etapas del proceso, optimizando la secuencia para obtener el máximo rendimiento.',
    project_gantry_result:
      'La solución robótica aumentó drásticamente la tasa de producción y redujo los errores, permitiendo que los operadores se concentren en tareas de mayor valor. La automatización con un robot pórtico redujo los costos laborales en un 80 %, aumentando significativamente el rendimiento.',
    project_schedule_title: 'Máquina personalizada de programación para escaneo 3D',
    project_schedule_desc:
      'Miles de cajas y fijaciones requerían una programación precisa para el escaneo 3D. Construimos una máquina basada en cinta transportadora que coordina con un sistema de rayos X Nikon, orquestando el flujo de piezas para minimizar el tiempo de inactividad y garantizar una imagen precisa.',
    project_schedule_result:
      'Al automatizar la programación y la transferencia, el sistema aumenta la eficiencia e integra sin problemas el escaneo en el flujo de producción. Nuestra solución redujo el tiempo de procesamiento de 2 días a solo 40 segundos: una mejora de eficiencia de más del 99 %.',
    project_press_title: 'Prensado de precisión para cables ultrafinos',
    project_press_desc:
      'Conectar cables ultrafinos a placas de circuito de forma manual resultaba en una calidad inconsistente y elevadas tasas de rechazo. Diseñamos una máquina de prensado de precisión que aplica una presión controlada, garantizando contactos fiables cada vez.',
    project_press_result:
      'La máquina mejora la calidad y la velocidad de conexión mientras reduce el desperdicio y la fatiga del operador.',
    // Información de la patente
    project_coating_ip:
      'Solicitud de patente de EE.\u00A0UU.\u00A0N.º\u00A019/262,799 – “Dip Coating a Working Wire for a Biological Sensor” (presentada el\u00A08\u00A0de\u00A0julio\u00A0de\u00A02025)',
    project_gantry_ip:
      'Solicitud de patente de EE.\u00A0UU.\u00A0N.º\u00A019/264,592 – “Calibration for a Biological Sensor” (presentada el\u00A09\u00A0de\u00A0julio\u00A0de\u00A02025)',
    project_schedule_ip:
      'Solicitud de patente en curso\u00A0(detalles confidenciales)',
    project_moon_title: 'Cálculo de la distancia Tierra‑Luna',
    project_moon_desc:
      'Desarrollamos un algoritmo en Python para calcular rápidamente la distancia entre la Tierra y la Luna utilizando datos astronómicos. Aprovechando bibliotecas científicas, el programa ofrece resultados precisos en una fracción del tiempo requerido por los cálculos manuales.',
    project_moon_result:
      'Esta herramienta demuestra cómo la codificación eficiente puede acelerar la investigación científica y mejorar la precisión.',
    project_macro_title: 'Macro de ensamblaje de SolidWorks',
    project_macro_desc:
      'Mantener miles de ensamblajes de SolidWorks consumía tiempo y era propenso a errores. Creamos una macro personalizada que automatiza las actualizaciones de piezas en múltiples archivos mientras conserva las dependencias y relaciones.',
    project_macro_result:
      'La macro redujo semanas de trabajo manual a horas, mejorando la precisión y permitiendo que los ingenieros se concentren en el diseño.',
    project_js_title: 'Programa personalizado de JavaScript',
    project_js_desc:
      'Para un proyecto de investigación en la Universidad Estatal de Pensilvania, desarrollamos una aplicación de JavaScript a medida adaptada a los requisitos específicos del cliente. El programa proporciona una interfaz intuitiva y una funcionalidad robusta que no están disponibles en el software comercial.',
    project_js_result:
      'La solución destaca la versatilidad del código personalizado para resolver problemas únicos y mejorar la productividad.',
    project_glucose_title: 'Algoritmo de sensor de glucosa',
    project_glucose_desc:
      'Para mejorar la precisión y la capacidad de respuesta de un sensor de glucosa médico, desarrollamos un algoritmo que procesa los datos del sensor, filtra el ruido y proporciona lecturas precisas en tiempo real.',
    project_glucose_result:
      'Este proyecto muestra cómo el desarrollo de algoritmos puede mejorar el rendimiento de los dispositivos médicos y la atención al paciente.',
    testimonials_title: 'Lo que Dicen los Clientes',
    test1_quote:
      'Marco desarrolló un algoritmo creativo para el análisis de datos de nuestro radiotelescopio, reduciendo el tiempo de ejecución en más de 100 veces.',
    test1_author: 'Daniel Marlow',
    test1_role: 'Profesor de Física, Universidad de Princeton',
    test2_quote:
      'En mis más de 30 años de carrera, Marco es uno de los mejores ingenieros con los que he trabajado. Su conocimiento, actitud e interés genuino son impresionantes.',
    test2_author: 'Yuki Kojima',
    test2_role: 'Vicepresidente de Ingeniería, Taiyo Circuit Automation',
    test3_quote:
      'Marco diseñó un dispositivo mecánico reduciendo el número de motores de 49 a 4 mientras mantenía el rendimiento.',
    test3_author: 'Hyeonu Heo',
    test3_role: 'Emprendedor',

    // Additional testimonials (Spanish translations approximated)
    test4_quote:
      'Marco siempre me sorprende con su perspicacia industrial y sus enfoques únicos para resolver problemas. Es un placer trabajar con él y tiene una experiencia única en Python, MATLAB, aprendizaje automático y análisis de datos. Me ayudó con una propuesta para la National Science Foundation y será mi científico de datos si se aprueba la financiación.',
    test4_author: 'Whelton Miller',
    test4_role: 'Profesor adjunto en la Facultad de Medicina Loyola University Chicago Stritch',
    test5_quote:
      'Le pedí a Marco que me ayudara con un proyecto de JavaScript. Tiene mucho conocimiento de programación y completó la tarea en solo unas horas. Recomiendo a Marco.',
    test5_author: 'ViKash Gayah, PhD',
    test5_role: 'Profesor adjunto en la Penn State University',
    test6_quote:
      'Marco es una gran persona con quien trabajar. Es conocedor, determinado, trabajador y siempre se esfuerza por lograr los mejores resultados. Por esta razón, lo recomendaría en cualquier proyecto que emprenda.',
    test6_author: 'Alston Pike',
    test6_role: 'Ingeniero eléctrico en Progress Rail',
    test7_quote:
      'Le pedí a Marco que creara un archivo 3D para imprimir y lo completó muy rápidamente y exactamente según mis especificaciones. Espero volver a trabajar con Marco en el futuro.',
    test7_author: 'James Coughlan, PhD',
    test7_role: 'Científico senior en el Instituto Smith‑Kettlewell',
    test8_quote:
      'He trabajado con Marco en múltiples proyectos y siempre me impresiona su amplio conocimiento técnico y dedicación. Utilizó hábilmente SolidWorks y programación PLC para construir varios equipos de automatización con especificaciones exigentes para Zense. Demuestra pensamiento adaptativo y creativo para satisfacer requisitos de diseño cambiantes y desafíos técnicos. Marco sería un gran miembro en cualquier equipo de ingeniería.',
    test8_author: 'Mark Wu',
    test8_role: 'Director de Zense‑Life',
    contact_title: 'Contáctenos',
    contact_intro:
      '¿Listo para transformar su negocio con excelencia en ingeniería? Comuníquese con nosotros por correo electrónico o mediante el formulario a continuación.',
    contact_email_label: 'Correo electrónico',
    contact_phone_label: 'Teléfono',
    contact_address_label: 'Dirección',
    contact_form_name: 'Su nombre',
    contact_form_email: 'Su correo electrónico',
    contact_form_message: 'Su mensaje',
    contact_form_submit: 'Enviar mensaje',
    // Privacy policy
    privacy_title: 'Política de privacidad',
    privacy_intro: 'Fecha de entrada en vigor: 2025-09-09',
    privacy_who_title: 'Quiénes somos',
    privacy_who_content:
      'EngineeringXYZ (“nosotros”) ofrece servicios de consultoría de ingeniería. Esta política explica cómo recopilamos, utilizamos y protegemos su información.',
    privacy_collect_title: 'Qué recopilamos',
    privacy_collect_list1: 'Datos de contacto (nombre, correo electrónico, teléfono) que envía a través de formularios',
    privacy_collect_list2: 'Detalles de proyectos que comparte con nosotros',
    privacy_collect_list3: 'Análisis del sitio web y parámetros UTM (para atribución de marketing)',
    privacy_why_title: 'Por qué lo recopilamos',
    privacy_why_list1: 'Para responder a consultas y proporcionar servicios',
    privacy_why_list2: 'Para mejorar nuestro sitio y medir el rendimiento de las campañas',
    privacy_why_list3: 'Para cumplir obligaciones legales',
    privacy_store_title: 'Cómo almacenamos y compartimos',
    privacy_store_content:
      'Los datos se almacenan en servicios seguros (por ejemplo, Google/Firebase). No vendemos datos personales. Podemos compartirlos con proveedores de servicios (por ejemplo, entrega de correo electrónico, análisis) en virtud de acuerdos de procesamiento de datos.',
    privacy_rights_title: 'Sus derechos',
    privacy_rights_content:
      'Si se encuentra en California (CCPA) u otras regiones con leyes de privacidad (como GDPR), puede solicitar acceso, corrección, eliminación o restricción de sus datos. Contáctenos en <a href="mailto:info@engineeringxyz.com">info@engineeringxyz.com</a>.',
    privacy_cookies_title: 'Cookies y seguimiento',
    privacy_cookies_content:
      'Utilizamos GA4 / Meta Pixel / LinkedIn Insight Tag para análisis y publicidad. Puede gestionar las cookies en la configuración de su navegador.',
    privacy_retention_title: 'Retención de datos',
    privacy_retention_content:
      'Conservamos los datos personales solo durante el tiempo necesario para los fines descritos anteriormente, a menos que la ley exija un período más largo.',
    privacy_contact_title: 'Contacto',
    privacy_contact_content:
      'Para preguntas de privacidad, envíe un correo a <a href="mailto:info@engineeringxyz.com">info@engineeringxyz.com</a>.',
    // Resume page
    resume_title: 'Envíe su currículum y portafolio',
    resume_intro:
      'Freelancers y consultores: utilicen el siguiente formulario para compartir su experiencia. Esto nos ayuda a emparejarlo con proyectos de EngineeringXYZ (diseño mecánico, automatización, IA/datos, PLC/robótica).',
    resume_recommended_title: 'Campos recomendados del formulario',
    resume_field_fullname: 'Nombre completo',
    resume_field_email_phone: 'Correo electrónico (obligatorio) y teléfono (opcional)',
    resume_field_location: 'Ubicación y zona horaria (ciudad, país)',
    resume_field_skills:
      'Habilidades clave (por ejemplo, CAD/SolidWorks, diseño de plantillas/mecanismos, PLC, Python/JS, IA/ML)',
    resume_field_experience:
      'Años de experiencia (≥10 años para roles senior)',
    resume_field_portfolio_links:
      'Enlaces del portafolio (GitHub, Google Drive, sitio web, LinkedIn, Upwork)',
    resume_field_highlights:
      'Aspectos destacados de proyectos (3–5 puntos con resultados)',
    resume_field_availability: 'Disponibilidad y tarifa por hora',
    resume_field_nda: 'Casilla de consentimiento de NDA',
    resume_note:
      'Nota: Los envíos se gestionan a través de Google Forms. Consulte nuestra <a href="privacy.html" target="_blank" rel="noopener">política de privacidad</a> para más detalles.'
  }
};

// Function to update text based on selected language
function setLanguage(lang) {
  const dict = translations[lang] || translations.en;
  // Update elements with data-i18n keys
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });
  // Update alt text
  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    const key = el.getAttribute('data-i18n-alt');
    if (dict[key]) {
      el.setAttribute('alt', dict[key]);
    }
  });

  // Update elements with data-i18n-html (set innerHTML instead of textContent)
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });
}

// Event listener for language selector
// Persist selected language across page visits using localStorage.
// When the page loads, check if a language preference exists and apply it.
// When the user changes the language, save the choice and update the content.
document.addEventListener('DOMContentLoaded', () => {
  const selector = document.getElementById('language-selector');
  // Retrieve stored language or default to current selector value
  const storedLang = localStorage.getItem('lang') || selector.value;
  selector.value = storedLang;
  setLanguage(storedLang);
  selector.addEventListener('change', (e) => {
    const newLang = e.target.value;
    localStorage.setItem('lang', newLang);
    setLanguage(newLang);
  });
});