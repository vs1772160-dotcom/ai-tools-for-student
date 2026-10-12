export const COMPLETE_BLOGGER_XML = `<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html b:css='false' b:defaultwidgetversion='2' b:layoutsVersion='3' b:responsive='true' expr:dir='data:blog.languageDirection' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>
<head>
<meta content='width=device-width, initial-scale=1' name='viewport'/>
<meta content='#DB2777' name='theme-color'/>
<title><data:blog.pageTitle/></title>
<link href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;display=swap' rel='stylesheet'/>
<b:include data='blog' name='all-head-content'/>
<b:skin><![CDATA[
/* =========================================================
   AI Tools Hub - Blogger theme
   Pink brand palette (from Figma "Website Template")
   ========================================================= */
:root{
  --brand:#DB2777;
  --brand-dark:#BE185D;
  --brand-soft:#FDF2F8;
  --bg:#FFFFFF;
  --bg-subtle:#F8FAFC;
  --bg-inverse:#0F172A;
  --text:#0F172A;
  --text-2:#475569;
  --text-inv:#FFFFFF;
  --text-inv-2:#CBD5E1;
  --border:#E2E8F0;
  --radius:20px;
  --wrap:1280px;
}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;font-family:'Inter',system-ui,-apple-system,Segoe UI,Roboto,sans-serif;color:var(--text);background:var(--bg);line-height:1.6;-webkit-font-smoothing:antialiased}
a{color:var(--brand);text-decoration:none}
a:hover{color:var(--brand-dark)}
img{max-width:100%;height:auto}
.section,.widget{margin:0;padding:0}
.widget ul{list-style:none;margin:0;padding:0}
.wrap{max-width:var(--wrap);margin:0 auto;padding:0 40px}

/* ---------- Buttons ---------- */
.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:14px 24px;border-radius:10px;font-weight:600;font-size:16px;line-height:1;border:1px solid transparent;cursor:pointer;font-family:inherit;transition:background .15s,transform .15s}
.btn-primary{background:var(--brand);color:#fff}
.btn-primary:hover{background:var(--brand-dark);color:#fff}
.btn-secondary{background:#fff;color:var(--text);border-color:var(--border)}
.btn-secondary:hover{background:var(--bg-subtle);color:var(--text)}

/* ---------- Header / Nav ---------- */
.site-header{position:sticky;top:0;z-index:50;background:rgba(255,255,255,.92);backdrop-filter:blur(8px);border-bottom:1px solid var(--border)}
.nav{display:flex;align-items:center;justify-content:space-between;gap:24px;padding-top:18px;padding-bottom:18px}
.brand{display:inline-flex;align-items:center;gap:10px;color:var(--text);font-weight:800;font-size:22px;letter-spacing:-.3px}
.brand:hover{color:var(--text)}
.brand-mark{width:32px;height:32px;border-radius:8px;background:var(--brand);display:inline-block}
.nav-menu{display:flex;align-items:center;gap:32px}
.nav-links{display:flex;gap:32px}
.nav-links a{color:var(--text-2);font-weight:500;font-size:16px}
.nav-links a:hover{color:var(--brand)}
.nav-toggle{display:none;background:none;border:1px solid var(--border);border-radius:10px;padding:8px 12px;font-size:20px;cursor:pointer;color:var(--text)}

/* ---------- Hero ---------- */
.hero{background:linear-gradient(180deg,var(--brand-soft) 0%,#fff 100%);padding:96px 0 72px;text-align:center}
.badge{display:inline-block;background:#fff;color:var(--brand);border:1px solid #FBCFE8;font-size:14px;font-weight:600;padding:6px 14px;border-radius:999px}
.hero h1{font-size:clamp(38px,6vw,68px);line-height:1.1;letter-spacing:-1.5px;font-weight:800;margin:28px auto 20px;max-width:900px}
.hero h1 span{color:var(--brand)}
.hero p.lead{font-size:20px;color:var(--text-2);max-width:660px;margin:0 auto 36px}
.search{display:flex;gap:10px;max-width:620px;margin:0 auto 28px;background:#fff;border:1px solid var(--border);border-radius:14px;padding:8px;box-shadow:0 10px 30px rgba(219,39,119,.08)}
.search input{flex:1;border:0;outline:0;font-size:16px;padding:10px 14px;font-family:inherit;background:transparent;color:var(--text);min-width:0}
.chips{display:flex;flex-wrap:wrap;gap:10px;justify-content:center}
.chips a{background:#fff;border:1px solid var(--border);color:var(--text-2);padding:8px 16px;border-radius:999px;font-size:14px;font-weight:500}
.chips a:hover{border-color:var(--brand);color:var(--brand)}

/* ---------- Generic sections ---------- */
.block{padding:96px 0}
.block.subtle{background:var(--bg-subtle)}
.sec-head{text-align:center;max-width:720px;margin:0 auto 56px}
.overline{color:var(--brand);font-weight:600;font-size:14px;letter-spacing:1.5px;text-transform:uppercase}
.sec-title{font-size:clamp(30px,4vw,40px);line-height:1.15;letter-spacing:-.8px;font-weight:800;margin:12px 0 14px}
.sec-sub{color:var(--text-2);font-size:18px;margin:0}

/* ---------- Feature cards ---------- */
.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:32px}
.card{display:block;background:#fff;border:1px solid var(--border);border-radius:var(--radius);padding:32px;color:var(--text);transition:transform .15s,box-shadow .15s,border-color .15s}
.card:hover{transform:translateY(-3px);box-shadow:0 14px 34px rgba(15,23,42,.08);border-color:#FBCFE8;color:var(--text)}
.tile{width:48px;height:48px;border-radius:12px;background:var(--brand-soft);color:var(--brand);font-weight:700;display:flex;align-items:center;justify-content:center;margin-bottom:18px}
.card h3{font-size:20px;margin:0 0 10px;font-weight:600}
.card p{margin:0;color:var(--text-2)}

/* ---------- Labels bar (Label widget) ---------- */
.labels-bar{margin-bottom:36px}
.labels-bar h3{display:none}
.labels-bar .widget ul{display:flex;flex-wrap:wrap;gap:10px}
.labels-bar .widget li a{display:inline-block;background:#fff;border:1px solid var(--border);color:var(--text-2);padding:8px 16px;border-radius:999px;font-size:14px;font-weight:500}
.labels-bar .widget li a:hover{border-color:var(--brand);color:var(--brand)}
.labels-bar .label-count,.labels-bar .widget li span{display:none}
body:not(.index) .labels-bar{display:none}

/* ---------- Post grid ---------- */
.main-area{padding:80px 0;background:var(--bg-subtle)}
body.item .main-area,body.static_page .main-area,body.error_page .main-area{background:#fff;padding:56px 0 80px}
.list-title{font-size:30px;font-weight:800;letter-spacing:-.5px;margin:0 0 28px}
.post-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:32px}
.post-card{background:#fff;border:1px solid var(--border);border-radius:var(--radius);overflow:hidden;display:flex;flex-direction:column;transition:transform .15s,box-shadow .15s}
.post-card:hover{transform:translateY(-3px);box-shadow:0 14px 34px rgba(15,23,42,.08)}
.post-card .thumb{display:block;aspect-ratio:16/9;background:var(--brand-soft);overflow:hidden}
.post-card .thumb img{width:100%;height:100%;object-fit:cover;display:block}
.post-card .thumb.empty{display:flex;align-items:center;justify-content:center;color:var(--brand);font-weight:700;font-size:34px}
.post-card .body{padding:24px;display:flex;flex-direction:column;gap:12px;flex:1}
.tag{display:inline-block;background:var(--brand-soft);color:var(--brand);font-size:12px;font-weight:600;padding:4px 10px;border-radius:999px;margin-right:6px}
.post-card h2{font-size:20px;line-height:1.3;margin:0;font-weight:700}
.post-card h2 a{color:var(--text)}
.post-card h2 a:hover{color:var(--brand)}
.post-card .snippet{color:var(--text-2);font-size:15px;margin:0}
.meta{color:var(--text-2);font-size:13px;margin-top:auto}
.pager{display:flex;justify-content:space-between;gap:16px;margin-top:48px}

/* ---------- Single post ---------- */
.article{max-width:780px;margin:0 auto}
.crumbs{font-size:14px;color:var(--text-2);margin-bottom:18px}
.article h1{font-size:clamp(32px,5vw,48px);line-height:1.12;letter-spacing:-1px;font-weight:800;margin:0 0 16px}
.article .meta{margin:0 0 32px;font-size:15px}
.post-body{font-size:18px;color:#1E293B;line-height:1.75;overflow-wrap:break-word}
.post-body h2,.post-body h3{letter-spacing:-.4px;line-height:1.25;margin:40px 0 14px}
.post-body img{border-radius:14px}
.post-body a{text-decoration:underline}
.post-body blockquote{margin:28px 0;padding:14px 22px;border-left:4px solid var(--brand);background:var(--brand-soft);border-radius:0 12px 12px 0;color:var(--text)}
.post-body code{background:var(--brand-soft);color:var(--brand-dark);padding:2px 7px;border-radius:6px;font-size:.9em;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}
.post-body pre{background:var(--bg-inverse);color:#E2E8F0;padding:20px 22px;border-radius:14px;overflow:auto;font-size:14.5px;line-height:1.6}
.post-body pre code{background:none;color:inherit;padding:0;font-size:inherit}
.post-body table{width:100%;border-collapse:collapse;margin:24px 0;font-size:16px}
.post-body th,.post-body td{border:1px solid var(--border);padding:10px 14px;text-align:left}
.post-body th{background:var(--bg-subtle)}
.post-tags{margin:36px 0 0}
.comments{margin-top:56px;padding-top:32px;border-top:1px solid var(--border)}
.comments h3{font-size:22px}

/* ---------- Stats ---------- */
.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:40px;text-align:center}
.stats b{display:block;font-size:56px;line-height:1;letter-spacing:-1px;color:var(--brand);font-weight:800;margin-bottom:8px}
.stats span{color:var(--text-2);font-weight:500}

/* ---------- CTA ---------- */
.cta{background:var(--bg-inverse);color:var(--text-inv);border-radius:32px;padding:80px 40px;text-align:center}
.cta h2{font-size:clamp(32px,5vw,48px);line-height:1.12;letter-spacing:-1px;font-weight:800;margin:0 0 16px}
.cta p{color:var(--text-inv-2);font-size:18px;max-width:600px;margin:0 auto 32px}
.cta .row{display:flex;gap:16px;justify-content:center;flex-wrap:wrap}

/* ---------- Footer ---------- */
.site-footer{background:var(--bg-subtle);padding:64px 0 32px}
.foot-top{display:flex;justify-content:space-between;gap:48px;flex-wrap:wrap}
.foot-brand{max-width:340px}
.foot-brand p{color:var(--text-2);font-size:15px;margin:16px 0 0}
.foot-cols{display:flex;gap:80px;flex-wrap:wrap}
.foot-cols h4{font-size:14px;margin:0 0 14px}
.foot-cols a{display:block;color:var(--text-2);font-size:15px;margin-bottom:10px}
.foot-cols a:hover{color:var(--brand)}
.foot-bottom{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;border-top:1px solid var(--border);margin-top:48px;padding-top:24px;color:var(--text-2);font-size:14px}
.foot-bottom a{color:var(--text-2)}

/* ---------- Responsive ---------- */
@media (max-width:980px){
  .cards,.post-grid{grid-template-columns:repeat(2,1fr)}
  .stats{grid-template-columns:repeat(2,1fr)}
}
@media (max-width:860px){
  .wrap{padding:0 20px}
  .nav-toggle{display:block}
  .nav-menu{display:none;position:absolute;top:100%;left:0;right:0;background:#fff;border-bottom:1px solid var(--border);padding:20px;flex-direction:column;align-items:flex-start;gap:20px}
  .nav-menu.open{display:flex}
  .nav-links{flex-direction:column;gap:16px}
  .hero{padding:64px 0 48px}
  .block{padding:64px 0}
  .main-area{padding:56px 0}
}
@media (max-width:620px){
  .cards,.post-grid{grid-template-columns:1fr}
  .search{flex-direction:column}
  .cta{padding:56px 24px;border-radius:24px}
  .foot-cols{gap:40px}
}
]]></b:skin>
</head>

<body expr:class='data:blog.pageType'>

<!-- ================= HEADER ================= -->
<header class='site-header'>
  <div class='wrap nav'>
    <b:section class='brand-section' id='header' maxwidgets='1' showaddelement='no'>
      <b:widget id='Header1' locked='true' title='AI Tools Hub (Header)' type='Header' version='2'>
        <b:widget-settings>
          <b:widget-setting name='displayUrl'/>
          <b:widget-setting name='displayHeight'>0</b:widget-setting>
          <b:widget-setting name='sectionWidth'>-1</b:widget-setting>
          <b:widget-setting name='useImage'>false</b:widget-setting>
          <b:widget-setting name='shrinkToFit'>false</b:widget-setting>
          <b:widget-setting name='imagePlacement'>BEHIND</b:widget-setting>
          <b:widget-setting name='displayWidth'>0</b:widget-setting>
        </b:widget-settings>
        <b:includable id='main' var='this'>
          <a class='brand' expr:href='data:blog.homepageUrl'><span class='brand-mark'></span><span class='brand-text'><data:blog.title/></span></a>
        </b:includable>
      </b:widget>
    </b:section>

    <button aria-label='Menu' class='nav-toggle' id='nav-toggle' type='button'>&#9776;</button>

    <div class='nav-menu' id='site-nav'>
      <b:section class='nav-section' id='nav' maxwidgets='1' showaddelement='yes'>
        <b:widget id='LinkList1' locked='false' title='Menu' type='LinkList' version='2'>
          <b:widget-settings>
            <b:widget-setting name='link-0'>/</b:widget-setting>
            <b:widget-setting name='text-0'>Home</b:widget-setting>
            <b:widget-setting name='link-1'>/search/label/AI%20Tools</b:widget-setting>
            <b:widget-setting name='text-1'>AI Tools</b:widget-setting>
            <b:widget-setting name='link-2'>/p/about.html</b:widget-setting>
            <b:widget-setting name='text-2'>About</b:widget-setting>
            <b:widget-setting name='sorting'>NONE</b:widget-setting>
          </b:widget-settings>
          <b:includable id='main'>
            <nav class='nav-links'>
              <b:loop values='data:links' var='link'>
                <a expr:href='data:link.target'><data:link.name/></a>
              </b:loop>
            </nav>
          </b:includable>
        </b:widget>
      </b:section>
      <a class='btn btn-primary' href='/search/label/AI%20Tools'>Explore tools</a>
    </div>
  </div>
</header>

<!-- ================= HOMEPAGE HERO + CATEGORIES ================= -->
<b:if cond='data:view.isHomepage'>
  <section class='hero'>
    <div class='wrap'>
      <span class='badge'>New AI tools reviewed every week</span>
      <h1>Discover the best <span>AI tools</span> for work and code</h1>
      <p class='lead'>Honest reviews, tutorials and comparisons of the AI tools that actually save you time. Find your next favorite tool in minutes.</p>
      <form action='/search' class='search' method='get'>
        <input aria-label='Search AI tools' name='q' placeholder='Search AI tools, tutorials, prompts...' type='search'/>
        <button class='btn btn-primary' type='submit'>Search</button>
      </form>
      <div class='chips'>
        <a href='/search/label/Chatbots'>Chatbots</a>
        <a href='/search/label/Dev%20Tools'>Dev Tools</a>
        <a href='/search/label/Image%20AI'>Image AI</a>
        <a href='/search/label/Productivity'>Productivity</a>
        <a href='/search/label/Free%20Tools'>Free Tools</a>
      </div>
    </div>
  </section>

  <section class='block'>
    <div class='wrap'>
      <div class='sec-head'>
        <div class='overline'>Flagship AI Tools &#38; Models</div>
        <h2 class='sec-title'>ChatGPT, Claude, Gemini &#38; More</h2>
        <p class='sec-sub'>In-depth benchmarks, pricing comparisons, and verified reviews for the world&#39;s leading AI platforms.</p>
      </div>
      <div class='cards'>
        <a class='card' href='https://chatgpt.com' target='_blank' rel='noopener'>
          <div class='tile'>GPT</div>
          <h3>ChatGPT (OpenAI)</h3>
          <p>GPT-4o, o3-mini reasoning, real-time voice mode, custom GPTs, and Canvas collaborative workspace.</p>
        </a>
        <a class='card' href='https://claude.ai' target='_blank' rel='noopener'>
          <div class='tile'>CL</div>
          <h3>Claude (Anthropic)</h3>
          <p>Claude 3.7 Sonnet with hybrid reasoning, 200k context window, Artifacts, and top-tier coding intelligence.</p>
        </a>
        <a class='card' href='https://gemini.google.com' target='_blank' rel='noopener'>
          <div class='tile'>GM</div>
          <h3>Google Gemini</h3>
          <p>Gemini 2.0 Flash &#38; Pro with 2M token context, native multimodal video/audio, and Workspace integration.</p>
        </a>
        <a class='card' href='https://cursor.com' target='_blank' rel='noopener'>
          <div class='tile'>CU</div>
          <h3>Cursor AI Editor</h3>
          <p>Autonomous multi-file Composer agent, background indexing, custom .cursorrules, and fast inline diffs.</p>
        </a>
        <a class='card' href='https://perplexity.ai' target='_blank' rel='noopener'>
          <div class='tile'>PX</div>
          <h3>Perplexity AI</h3>
          <p>Deep Research synthesis across dozens of web sources, verified citations, and instant report generation.</p>
        </a>
        <a class='card' href='https://midjourney.com' target='_blank' rel='noopener'>
          <div class='tile'>MJ</div>
          <h3>Midjourney &#38; Flux</h3>
          <p>State-of-the-art visual generation, photorealistic cinematic lighting, typography precision, and web editor.</p>
        </a>
      </div>
    </div>
  </section>
</b:if>

<!-- ================= MAIN CONTENT ================= -->
<main class='main-area'>
  <div class='wrap'>

    <div class='labels-bar'>
      <b:section class='labels-section' id='labels' maxwidgets='1' showaddelement='yes'>
        <b:widget id='Label1' locked='false' title='Categories' type='Label' version='2'/>
      </b:section>
    </div>

    <b:section class='main-section' id='main' showaddelement='no'>
      <b:widget id='Blog1' locked='true' title='Blog Posts' type='Blog' version='2'>
        <b:includable id='main' var='this'>

          <!-- Listing: homepage, labels, search, archive -->
          <b:if cond='data:view.isMultipleItems'>
            <h2 class='list-title'>
              <b:if cond='data:blog.searchLabel'>Category: <data:blog.searchLabel/>
              <b:elseif cond='data:blog.searchQuery'/>Results for: <data:blog.searchQuery/>
              <b:else/>Latest AI tool reviews
              </b:if>
            </h2>
            <div class='post-grid'>
              <b:loop values='data:posts' var='post'>
                <article class='post-card'>
                  <a class='thumb' expr:href='data:post.url'>
                    <b:if cond='data:post.featuredImage'>
                      <img expr:alt='data:post.title' expr:src='resizeImage(data:post.featuredImage, 640, "16:9")' loading='lazy'/>
                    <b:else/>
                      <span class='empty'>AI</span>
                    </b:if>
                  </a>
                  <div class='body'>
                    <b:if cond='data:post.labels'>
                      <div>
                        <b:loop values='data:post.labels' var='label' index='i'>
                          <b:if cond='data:i lt 2'><span class='tag'><data:label.name/></span></b:if>
                        </b:loop>
                      </div>
                    </b:if>
                    <h2><a expr:href='data:post.url'><data:post.title/></a></h2>
                    <p class='snippet'><b:eval expr='snippet(data:post.body, {length: 130, links: false, linebreaks: false, ellipsis: true})'/></p>
                    <div class='meta'><data:post.date/> &#183; <data:post.author.name/></div>
                  </div>
                </article>
              </b:loop>
            </div>
            <div class='pager'>
              <b:if cond='data:blog.newerPageUrl'>
                <a class='btn btn-secondary' expr:href='data:blog.newerPageUrl'>&#8592; Newer posts</a>
              </b:if>
              <b:if cond='data:blog.olderPageUrl'>
                <a class='btn btn-secondary' expr:href='data:blog.olderPageUrl'>Older posts &#8594;</a>
              </b:if>
            </div>
          </b:if>

          <!-- Single post or static page -->
          <b:if cond='data:view.isSingleItem'>
            <b:loop values='data:posts' var='post'>
              <article class='article'>
                <div class='crumbs'><a expr:href='data:blog.homepageUrl'>Home</a> / <data:post.title/></div>
                <h1><data:post.title/></h1>
                <b:if cond='data:view.isPost'>
                  <div class='meta'><data:post.date/> &#183; <data:post.author.name/></div>
                </b:if>
                <div class='post-body'><data:post.body/></div>
                <b:if cond='data:view.isPost and data:post.labels'>
                  <div class='post-tags'>
                    <b:loop values='data:post.labels' var='label'>
                      <a class='tag' expr:href='data:label.url' rel='tag'><data:label.name/></a>
                    </b:loop>
                  </div>
                </b:if>
                <b:if cond='data:view.isPost and data:post.allowComments'>
                  <div class='comments'>
                    <b:include data='post' name='comments'/>
                  </div>
                </b:if>
              </article>
            </b:loop>
          </b:if>

          <!-- 404 Error page -->
          <b:if cond='data:view.isError'>
            <div class='article' style='text-align: center; padding: 60px 0;'>
              <h1 style='font-size: 72px; color: var(--brand); margin-bottom: 8px;'>404</h1>
              <h2 style='font-size: 28px; margin-bottom: 16px;'>Page not found</h2>
              <p style='color: var(--text-2); max-width: 500px; margin: 0 auto 32px;'>
                The AI tool review or page you are looking for has been moved, renamed, or does not exist.
              </p>
              <a class='btn btn-primary' expr:href='data:blog.homepageUrl'>Return to Homepage</a>
            </div>
          </b:if>

        </b:includable>
      </b:widget>
    </b:section>
  </div>
</main>

<!-- ================= STATS SECTION ================= -->
<b:if cond='data:view.isHomepage'>
  <section class='block'>
    <div class='wrap'>
      <div class='stats'>
        <div>
          <b>500+</b>
          <span>Curated AI tools</span>
        </div>
        <div>
          <b>120k+</b>
          <span>Monthly engineers</span>
        </div>
        <div>
          <b>4.9</b>
          <span>Average review score</span>
        </div>
        <div>
          <b>100%</b>
          <span>Unbiased benchmarks</span>
        </div>
      </div>
    </div>
  </section>

  <!-- ================= CTA SECTION ================= -->
  <section class='block subtle'>
    <div class='wrap'>
      <div class='cta'>
        <h2>Stay ahead of the AI curve</h2>
        <p>Get our weekly breakdown of new AI tools, hidden developer gems, and workflow automation guides directly in your inbox.</p>
        <div class='row'>
          <a class='btn btn-primary' href='#subscribe' style='background:#fff; color:var(--text);'>Subscribe to newsletter</a>
          <a class='btn btn-secondary' href='/search/label/AI%20Tools' style='background:transparent; color:#fff; border-color:rgba(255,255,255,0.25);'>Browse directory</a>
        </div>
      </div>
    </div>
  </section>
</b:if>

<!-- ================= FOOTER ================= -->
<footer class='site-footer'>
  <div class='wrap'>
    <div class='foot-top'>
      <div class='foot-brand'>
        <a class='brand' expr:href='data:blog.homepageUrl'><span class='brand-mark'></span><span class='brand-text'><data:blog.title/></span></a>
        <p>AI Tools Hub is an independent testing lab and publication dedicated to reviewing modern generative AI tools and developer utilities.</p>
      </div>
      <div class='foot-cols'>
        <div>
          <h4>Categories</h4>
          <a href='/search/label/AI%20Tools'>AI Tools</a>
          <a href='/search/label/Chatbots'>Chatbots</a>
          <a href='/search/label/Image%20AI'>Image AI</a>
          <a href='/search/label/Productivity'>Productivity</a>
          <a href='/search/label/Free%20Tools'>Free Tools</a>
        </div>
        <div>
          <h4>Editorial</h4>
          <a href='/search/label/Tutorials'>Tutorials</a>
          <a href='/p/benchmarks.html'>Benchmarks</a>
          <a href='/p/methodology.html'>Review Criteria</a>
          <a href='/p/submit-tool.html'>Submit Tool</a>
        </div>
        <div>
          <h4>Company</h4>
          <a href='/p/about.html'>About Us</a>
          <a href='/p/contact.html'>Contact</a>
          <a href='/p/privacy.html'>Privacy Policy</a>
          <a href='/p/terms.html'>Terms of Service</a>
        </div>
      </div>
    </div>
    <div class='foot-bottom'>
      <span>&#169; <b:eval expr='data:blog.title'/> - Powered by Blogger.</span>
      <div>
        <a expr:href='data:blog.homepageUrl + "feeds/posts/default"'>RSS Feed</a> &#183;
        <a href='/p/privacy.html'>Privacy</a>
      </div>
    </div>
  </div>
</footer>

<script><![CDATA[
  // Mobile navigation toggle
  document.addEventListener('DOMContentLoaded', function() {
    var toggle = document.getElementById('nav-toggle');
    var nav = document.getElementById('site-nav');
    if (toggle && nav) {
      toggle.addEventListener('click', function() {
        nav.classList.toggle('open');
      });
    }
  });
]]></script>

</body>
</html>
`;
