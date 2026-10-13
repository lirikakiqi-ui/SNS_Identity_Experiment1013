// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "実験にご参加いただき、ありがとうございます。",
          "content": "この実験は、慶應義塾大学社会学研究科が行う研究プロジェクトの一環として、オンライン交流環境における利用者の体験や認識を調べるためのものです。"
        },
        {
          "required": true,
          "type": "text",
          "content": "この後、いくつかのオンライン交流場面を読んでいただいた後、それぞれの場面においてどのように感じるかについて、いくつかの質問に回答していただきます。\n"
        },
        {
          "required": true,
          "type": "text",
          "content": "実験を始める前に、次のページでは、まず、実験参加への同意をいただきます。"
        },
        {
          "required": true,
          "type": "text",
          "content": "準備ができましたら「次へ」をクリックしてください。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": async function anonymous(
) {
// 1. 生成 8 位的随机被试 ID（如：58392014）
const digits = 7; // 生成 10^7 到 10^8 之间的数字，即 8 位数
this.state.participantID = this.random.range(10**digits, 10**(digits+1));

// 2. 本地随机分配组别兜底（Condition 1, 2, 3）
this.state.condition = Math.floor(Math.random() * 3) + 1;

// 3. 云端计数器精准轮流分配 3 个组
try {
  const response = await fetch('https://api.counterapi.dev/v1/my_lab_exp_2026/participant/up');
  const data = await response.json();
  if (data && typeof data.count === 'number') {
    this.state.condition = (data.count % 3) + 1;
    console.log('云端轮流分配成功，当前组别：', this.state.condition);
  }
} catch (err) {
  console.warn('云端连接失败，已自动降级为随机分配', err);
}
}
      },
      "title": "Welcome",
      "width": "l"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "実験参加への同意確認",
          "content": "【目的】\nこの実験は、オンライン交流環境における利用者の体験や認識を明らかにすることを目的としています。参加者には、オンラインコミュニティを利用している場面を想定し、一連の利用体験を行っていただきます。その中で、利用者がどのような感覚や評価を持つのかを調査します。"
        },
        {
          "required": true,
          "type": "text",
          "content": "【所要時間】この実験はおおよそ5〜10分かかります。",
          "title": ""
        },
        {
          "required": true,
          "type": "text",
          "content": "【リスク】本実験への参加によって、心理的な負担や疲労を感じる可能性があります。また、提示される内容によっては、日常的な経験を思い出す場合があります。\n"
        },
        {
          "required": true,
          "type": "text",
          "content": "【リスクへの対策】実験への参加は任意です。途中で不快感や疲労を感じた場合は、いつでも参加を中止することができます。"
        },
        {
          "required": true,
          "type": "text",
          "content": "\n【データの利用】この実験で得られたデータは、修士論文を含む学術研究の目的にのみ利用します。"
        },
        {
          "required": true,
          "type": "text",
          "content": "【個人情報】この実験では、個人を特定できる情報は収集しません。回答データは匿名化された状態で扱われます。"
        },
        {
          "required": true,
          "type": "text",
          "content": "【データの廃棄】この実験で得られたデータは、研究終了後、研究倫理上定められた期間保存した後、適切な方法で廃棄します。"
        },
        {
          "required": true,
          "type": "text",
          "content": "【謝礼】この実験への参加に対する謝礼として、100円をお支払いします。\n"
        },
        {
          "required": true,
          "type": "text",
          "content": "上記の内容をすべて確認し、ご理解いただいた上で、実験への参加に同意いただけますか。\n\nご同意いただけない場合は、ブラウザを閉じて実験を終了してください。\n"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Inform1",
      "width": "l"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 146.56,
          "height": 36.16,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Loading...",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 32,
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "loading",
      "timeout": "2000"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "circle",
          "left": 0,
          "top": 225,
          "angle": 0,
          "width": 69.15,
          "height": 69.15,
          "stroke": "#12864e",
          "strokeWidth": 1,
          "fill": "#d1f4cd"
        },
        {
          "type": "i-text",
          "left": -375,
          "top": -25,
          "angle": 0,
          "width": 770,
          "height": 255.56,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "...ある夜、あなたは寝る前にスマートフォンを見ていました。\n そのとき、友人からメッセージが届きました。\n \n「最近、このサイト見てる？ \nいろんな人が日常の出来事や悩みを書いていて、\n読むだけでも結構面白いよ。」 \n\n\n少し気になったあなたは、送られてきたリンクを開いてみることにしました。",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "18",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "left"
        },
        {
          "type": "aoi",
          "left": 0,
          "top": 224,
          "angle": 0,
          "width": 68.16,
          "height": 63.74,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "rgba(0, 0, 0, 0.2)",
          "label": "goon"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": 225,
          "angle": 0,
          "width": 54,
          "height": 20.34,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "#000000",
          "text": "つづく",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "18",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "click @goon": "goon"
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Intro"
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cdiv class=\"custom-profile-wrapper\"\u003E\n  \u003Cp class=\"custom-title\"\u003E\n    利用を始めるにあたり、あなたはコミュニティ内で表示されるプロフィールを\n    設定してください。\n  \u003C\u002Fp\u003E\n\n  \u003Cform id=\"profile-form\" class=\"custom-form\"\u003E\n    \n    \u003Cdiv class=\"custom-form-group\"\u003E\n      \u003Clabel\u003Eプロフィール画像を選択してください\u003C\u002Flabel\u003E\n      \u003Cdiv class=\"avatar-selector\"\u003E\n        \u003Clabel class=\"avatar-option\"\u003E\n          \u003Cinput type=\"radio\" name=\"avatar\" value=\"1\" checked required\u003E\n          \u003Cimg src=\"https:\u002F\u002Fapi.dicebear.com\u002F7.x\u002Fbottts\u002Fsvg?seed=1\" alt=\"Avatar 1\"\u003E\n        \u003C\u002Flabel\u003E\n        \u003Clabel class=\"avatar-option\"\u003E\n          \u003Cinput type=\"radio\" name=\"avatar\" value=\"2\"\u003E\n          \u003Cimg src=\"https:\u002F\u002Fapi.dicebear.com\u002F7.x\u002Fbottts\u002Fsvg?seed=2\" alt=\"Avatar 2\"\u003E\n        \u003C\u002Flabel\u003E\n        \u003Clabel class=\"avatar-option\"\u003E\n          \u003Cinput type=\"radio\" name=\"avatar\" value=\"3\"\u003E\n          \u003Cimg src=\"https:\u002F\u002Fapi.dicebear.com\u002F7.x\u002Fbottts\u002Fsvg?seed=3\" alt=\"Avatar 3\"\u003E\n        \u003C\u002Flabel\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"custom-form-group\"\u003E\n      \u003Clabel\u003Eニックネーム\u003C\u002Flabel\u003E\n      \u003Cinput type=\"text\" name=\"nickname\" required class=\"custom-input-text\"\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"custom-form-group\"\u003E\n      \u003Clabel\u003E年齢\u003C\u002Flabel\u003E\n      \u003Cdiv class=\"custom-age-row\"\u003E\n        \u003Cinput type=\"number\" name=\"age\" min=\"18\" max=\"69\" required class=\"custom-input-number\"\u003E\n        \u003Cspan class=\"custom-unit\"\u003E歳\u003C\u002Fspan\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv class=\"custom-btn-row\"\u003E\n      \u003Cbutton type=\"submit\" class=\"custom-submit-btn\"\u003E次へ\u003C\u002Fbutton\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fform\u003E\n\u003C\u002Fdiv\u003E\n\n\u003Cstyle\u003E\n  .custom-profile-wrapper { max-width: 550px; margin: 40px auto; font-family: sans-serif; text-align: left; }\n  .custom-title { font-size: 16px; line-height: 1.6; margin-bottom: 35px; }\n  .custom-form { display: flex; flex-direction: column; gap: 25px; }\n  .custom-form-group { display: flex; flex-direction: column; gap: 8px; }\n  .custom-form-group label { font-weight: bold; font-size: 15px; }\n  \n  \u002F* 头像选择器样式 *\u002F\n  .avatar-selector { display: flex; gap: 20px; margin: 10px 0; }\n  .avatar-option { cursor: pointer; position: relative; }\n  .avatar-option input[type=\"radio\"] { display: none; } \u002F* 隐藏原生丑陋的单选圆圈 *\u002F\n  .avatar-option img {\n    width: 70px; height: 70px; border-radius: 50%;\n    border: 3px solid #ccc; transition: all 0.2s;\n  }\n  \u002F* 当头像被选中时的被动变色（加粗蓝边） *\u002F\n  .avatar-option input[type=\"radio\"]:checked + img {\n    border-color: #007fff; transform: scale(1.05); box-shadow: 0 4px 10px rgba(0,127,255,0.3);\n  }\n\n  .custom-input-text { width: 100%; max-width: 300px; height: 40px; padding: 0 10px; font-size: 16px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; }\n  .custom-age-row { display: flex; align-items: center; gap: 10px; }\n  .custom-input-number { width: 120px; height: 40px; padding: 0 10px; font-size: 16px; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; }\n  .custom-unit { font-size: 16px; }\n  .custom-btn-row { margin-top: 15px; text-align: center; }\n  .custom-submit-btn { padding: 10px 40px; font-size: 16px; background-color: #fff; border: 1px solid #ccc; border-radius: 4px; cursor: pointer; }\n  .custom-submit-btn:hover { background-color: #f5f5f5; }\n\u003C\u002Fstyle\u003E",
      "scrollTop": true,
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "run": function anonymous(
) {
const form = document.getElementById('profile-form');
const currentComponent = this;

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const nicknameValue = formData.get('nickname');
    const ageValue = formData.get('age');
    const avatarValue = formData.get('avatar'); // 拿到 1, 2, 或 3

    currentComponent.state.nickname = nicknameValue;
    currentComponent.state.age = ageValue;
    currentComponent.state.avatarChoice = avatarValue; // 存入 1, 2, 3

    currentComponent.end();
  });
}
}
      },
      "title": "profile"
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "condition_FP",
      "skip": "${this.state.condition != 1}",
      "content": [
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "ellipse",
              "left": 313.97,
              "top": 250,
              "angle": 0,
              "width": 96.61,
              "height": 50,
              "stroke": "#0070d9",
              "strokeWidth": 1,
              "fill": "#e5f5ff"
            },
            {
              "type": "i-text",
              "left": -335.87,
              "top": -25,
              "angle": 0,
              "width": 580,
              "height": 127.46,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "そのサイトでは、多くの利用者が日常の出来事や悩みを投稿し、\nそれに対してさまざまなコメントが寄せられていました。\n\nその時、この投稿があなたの目に留まりました：\n",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "20",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "left"
            },
            {
              "type": "i-text",
              "left": 313.89,
              "top": 250,
              "angle": 0,
              "width": 60,
              "height": 22.6,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "つづく",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "20",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "aoi",
              "left": 313.99,
              "top": 250,
              "angle": 0,
              "width": 117.12,
              "height": 50,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "goon"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "click @goon": "goon"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Read-intro"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "content": "",
              "title": ""
            },
            {
              "required": true,
              "type": "image",
              "src": "${ this.files[\"FP-read.jpg\"] }",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "つづく→",
          "submitButtonPosition": "right",
          "files": {
            "FA-read.jpg": "embedded\u002F4e5ea3601a726810882069cecae42fd368591b1c48c2cda3433a9a3e63f07722.jpg",
            "FP-read.jpg": "embedded\u002F388c1635dd51456701532c499ce21d0a2e7487113df8f0f923246e42464b202d.jpg"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Read"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "投稿者は嘘をついたり、都合よく事実を隠したりしていないと感じる。",
                  "coding": "Q1"
                },
                {
                  "label": "コメントを書いている人が、ロボットではなく、実際に人が書いているものだと感じられる。",
                  "coding": "Q2"
                },
                {
                  "label": "これらのコメントが、現実の人々の価値観や考え方を反映していると感じる。",
                  "coding": "Q3"
                },
                {
                  "label": "閲覧しているとき、この場での議論は、ネット上の話題にとどまらず、現実社会で起きていることとも結びついていると意識した。",
                  "coding": "Q4"
                },
                {
                  "label": "自分が直接関わることなく、さまざまな情報を知ることに心地よさを感じる。",
                  "coding": "Q5"
                }
              ],
              "width": "7",
              "anchors": [
                "全くそう思わない",
                "そう思わない",
                "あまりそう思わない",
                "どちらともいえない",
                "ややそう思う",
                "そう思う",
                "非常にそう思う"
              ],
              "label": "先ほどの投稿内容やそれに対するコメントを閲覧したときのことを思い浮かべながら、以下の項目にお答えください。",
              "name": "READ"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "つづく →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Read-Q",
          "width": "l"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 679.2,
              "height": 22.6,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "その後も投稿を眺め続けていると、ある投稿があなたの目に留まりました。",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "20",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "ellipse",
              "left": 300,
              "top": 225,
              "angle": 0,
              "width": 113.88,
              "height": 50,
              "stroke": "#0070d9",
              "strokeWidth": 1,
              "fill": "#c5def2"
            },
            {
              "type": "i-text",
              "left": 300,
              "top": 225,
              "angle": 0,
              "width": 60,
              "height": 22.6,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "つづく",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "20",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "aoi",
              "left": 300,
              "top": 225,
              "angle": 0,
              "width": 133.57,
              "height": 50,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "goon"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "click @goon": "goon"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Comment-intro"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text"
            },
            {
              "required": true,
              "type": "image",
              "src": "${ this.files[\"FP-comment.jpg\"] }",
              "name": ""
            },
            {
              "required": true,
              "type": "text",
              "content": "あなたはこの投稿を読み、\u003Cbr\u003Eコメントを書こうとしています。\n"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "つづく →",
          "submitButtonPosition": "right",
          "files": {
            "FA-comment.jpg": "embedded\u002F187013292e4e2dbc1aa843bca718975bed7c41107a7eced50f08ac0abfd56f02.jpg",
            "FP-comment.jpg": "embedded\u002F1afa63df4ffdee580f5d6daccaaa2ffad04303febcaf3c48cd633001ebb8f567.jpg",
            "MIX-comment.jpg": "embedded\u002Fc80222cb60acdcc6f3b27761cd37547c311c9f9673a46239c38376312191ac82.jpg"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Comment"
        },
        {
          "type": "lab.html.Screen",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "run": function anonymous(
) {
// 1. 抓取页面上的名字、年龄、头像节点，以及下一页按钮
const nameSpan = document.getElementById('sns-name-text');
const ageSpan = document.getElementById('sns-age-text');
const avatarDiv = document.getElementById('sns-avatar-box');
const nextBtn = document.getElementById('next-btn');

// 2. 强行渲染用户名
if (nameSpan && this.state.nickname) {
  nameSpan.textContent = this.state.nickname;
} else if (nameSpan) {
  nameSpan.textContent = "匿名ユーザー";
}

// 3. 强行渲染年龄
if (ageSpan && this.state.age) {
  ageSpan.textContent = this.state.age + "歳";
}

// 4. 渲染与 profile 页一致的 dicebear 头像
if (avatarDiv && this.state.avatarChoice) {
  const choice = this.state.avatarChoice;
  avatarDiv.style.backgroundImage = "url(\"https://api.dicebear.com/7.x/bottts/svg?seed=" + choice + "\")";
}

// 5. 让“决定的按钮”点击后可以跳到下一页
if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    this.end();
  });
}
}
          },
          "title": "Comment-Imagine",
          "content": "\u003Cdiv class=\"sns-screen-wrapper\"\u003E\r\n  \r\n  \u003C!-- 1. 顶部引导语区域 --\u003E\r\n  \u003Cdiv class=\"sns-guide-group\"\u003E\r\n    \u003Ch2 class=\"sns-guide-title\"\u003E\r\n      どのようなコメントを書くか、\u003Cbr\u003Eよく考えてください。\r\n    \u003C\u002Fh2\u003E\r\n    \u003Cp class=\"sns-guide-sub\"\u003E\r\n      ※直接入力する必要はありません。頭の中で想像してください。\u003Cbr\u003E決まりましたら、下の「決めた」ボタンをクリックしてください。\r\n    \u003C\u002Fp\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n  \u003C!-- 2. 用户头像与信息展示区 --\u003E\r\n  \u003Cdiv class=\"sns-user-header\"\u003E\r\n    \u003Cdiv id=\"sns-avatar-box\" class=\"sns-avatar-box\"\u003E\u003C\u002Fdiv\u003E\r\n    \r\n    \u003Cdiv class=\"sns-user-meta\"\u003E\r\n      \u003Cspan id=\"sns-name-text\" class=\"sns-name-text\"\u003E加载中...\u003C\u002Fspan\u003E\r\n      \u003Cspan id=\"sns-age-text\" class=\"sns-age-text\"\u003E--\u003C\u002Fspan\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n  \u003C!-- 3. 评论输入框 --\u003E\r\n  \u003Cdiv class=\"sns-comment-box-area\"\u003E\r\n    \u003Cdiv class=\"sns-fake-input-large\"\u003E\r\n      コメントを追加...\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n  \u003C!-- 4. 提交按钮 --\u003E\r\n  \u003Cdiv class=\"sns-btn-area\"\u003E\r\n    \u003Cbutton id=\"next-btn\" class=\"sns-submit-button\"\u003E決めた\u003C\u002Fbutton\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n\u003C\u002Fdiv\u003E\r\n\r\n\u003Cstyle\u003E\r\n  \u002F* 全局精美居中排版 *\u002F\r\n  .sns-screen-wrapper {\r\n    max-width: 500px;\r\n    margin: 50px auto;\r\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\r\n    padding: 20px;\r\n    background: #fff;\r\n  }\r\n  \r\n  .sns-guide-group {\r\n    text-align: center;\r\n    margin-bottom: 25px;\r\n  }\r\n\r\n  .sns-guide-title {\r\n    font-size: 19px;\r\n    font-weight: 700;\r\n    line-height: 1.5;\r\n    color: #222;\r\n    margin: 0 0 8px 0;\r\n  }\r\n\r\n  \u002F* 副标题字体调小 *\u002F\r\n  .sns-guide-sub {\r\n    font-size: 12px;\r\n    color: #777;\r\n    margin: 0;\r\n    line-height: 1.4;\r\n  }\r\n\r\n  .sns-user-header {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 15px;\r\n    padding-left: 5px;\r\n  }\r\n\r\n  .sns-avatar-box {\r\n    width: 42px;\r\n    height: 42px;\r\n    border-radius: 50%;\r\n    flex-shrink: 0;\r\n    background-size: cover;\r\n    margin-right: 12px;\r\n    background-color: #eee;\r\n  }\r\n\r\n  .sns-user-meta {\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: left;\r\n  }\r\n  .sns-name-text {\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    color: #14171a;\r\n  }\r\n  .sns-age-text {\r\n    font-size: 13px;\r\n    color: #657786;\r\n    margin-top: 2px;\r\n  }\r\n\r\n  .sns-comment-box-area {\r\n    width: 100%;\r\n    margin-bottom: 20px;\r\n  }\r\n  .sns-fake-input-large {\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    font-size: 15px;\r\n    color: #888;\r\n    background: #f5f8fa;\r\n    padding: 18px 20px;\r\n    border-radius: 16px;\r\n    border: 1px solid #e1e8ed;\r\n    cursor: default;\r\n    user-select: none;\r\n    min-height: 100px;\r\n    text-align: left;\r\n  }\r\n\r\n  .sns-btn-area {\r\n    text-align: center;\r\n    margin-top: 40px;\r\n  }\r\n  .sns-submit-button {\r\n    background-color: #1da1f2;\r\n    color: white;\r\n    border: none;\r\n    padding: 12px 50px;\r\n    border-radius: 24px;\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    box-shadow: 0 2px 4px rgba(0,0,0,0.1);\r\n  }\r\n\u003C\u002Fstyle\u003E"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 544,
              "height": 36.16,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "あなたのコメントが投稿されました。",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "ーーー",
          "timeout": "5000"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "投稿者がどのような人（性別や年齢など）かにかかわらず、投稿内容そのものに注目してコメントを書いた。",
                  "coding": "Q6"
                },
                {
                  "label": "普段利用しているSNS（XやInstagramなど）よりも、率直に自分の意見を表現できると思う。",
                  "coding": "Q7"
                },
                {
                  "coding": "Q8",
                  "label": "投稿者本人から、自分や自分のコメントがどのように見られるかを気にする。"
                },
                {
                  "label": "投稿者以外の他の利用者から、自分や自分のコメントがどのように見られるかを気にする。",
                  "coding": "Q9"
                },
                {
                  "label": "この場では、コメントを自己呈示の一環として捉え、他者にどのような印象を与えるかを意識していた。",
                  "coding": "Q10"
                }
              ],
              "width": "7",
              "anchors": [
                "全くそう思わない",
                "そう思わない",
                "あまりそう思わない",
                "どちらともいえない",
                "ややそう思う",
                "そう思う",
                "非常にそう思う"
              ],
              "label": "投稿内容を読み、それに対してコメントをしたときのことを思い浮かべながら、以下の項目にお答えください。",
              "name": "COMMENT"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "つづく →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Comment-Q",
          "width": "l"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "ellipse",
              "left": 262.15,
              "top": 250,
              "angle": 0,
              "width": 80.14,
              "height": 50,
              "stroke": "#0070d9",
              "strokeWidth": 1,
              "fill": "#cbe4ec"
            },
            {
              "type": "i-text",
              "left": -335.01,
              "top": -10.01,
              "angle": 0,
              "width": 679.2,
              "height": 179.9,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "いろいろな投稿を見るうちに、\nあなた自身にも誰かに聞いてほしい出来事があることを思い出しました。\n\n最近は、家族との間で少しすれ違いがあり、気持ちが落ち込んでいました。\n\n身近な人には相談しづらかったため、\nあなたはこのサイトに自分の気持ちを投稿しました。",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "20",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "left"
            },
            {
              "type": "i-text",
              "left": 264.99,
              "top": 250,
              "angle": 0,
              "width": 54,
              "height": 20.34,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "つづく",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "18",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "aoi",
              "left": 264.9,
              "top": 250,
              "angle": 0,
              "width": 101.2,
              "height": 50,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "goon"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "click @goon": "goon"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Post-intro"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "text",
              "content": "\u003Cdiv class=\"sns-overlay-container\"\u003E\n  \u003Cdiv class=\"sns-profile-header-overlay\"\u003E\n    \u003Cdiv id=\"css-avatar\" class=\"sns-css-avatar\" data-avatar=\"${this.state.avatarChoice}\"\u003E\u003C\u002Fdiv\u003E\n    \n    \u003Cdiv class=\"sns-user-info\"\u003E\n      \u003Cspan id=\"show-nickname\" class=\"sns-username\"\u003E加载中...\u003C\u002Fspan\u003E\n      \u003Cspan class=\"sns-dot\"\u003E•\u003C\u002Fspan\u003E\n      \u003Cspan class=\"sns-age\"\u003E\u003Cspan id=\"show-age\"\u003E--\u003C\u002Fspan\u003E歳\u003C\u002Fspan\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fdiv\u003E\n\n\u003Cstyle\u003E\n  \u002F* 🌟 修改点 1：将 margin-bottom 改为较小的负值（如 -45px 到 -50px），刚好覆盖图片顶部的白框 *\u002F\n  .sns-overlay-container { \n    position: relative; \n    width: 100%; \n    max-width: 500px;\n    margin: 0 auto -50px auto; \u002F* 上 0, 左右居中, 下 -50px *\u002F\n    z-index: 10; \n    pointer-events: none; \n  }\n\n  \u002F* 🌟 修改点 2：把 absolute 改为 relative 配合 top 偏移，防止影响下一个 Component *\u002F\n  .sns-profile-header-overlay { \n    position: relative; \n    top: 15px; \n    left: 35px; \n    display: inline-flex; \n    align-items: center; \n    gap: 10px; \n    background-color: #fff; \n    padding-right: 20px; \n    pointer-events: auto; \n  }\n\n  \u002F* 基础圆形头像框 *\u002F\n  .sns-css-avatar { \n    width: 32px; \n    height: 32px; \n    border-radius: 50%; \n    flex-shrink: 0; \n    background-size: cover;\n  }\n  \n  .sns-css-avatar[data-avatar=\"1\"] {\n    background-image: url(\"data:image\u002Fsvg+xml;utf8,\u003Csvg xmlns='http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg' viewBox='0 0 100 100'\u003E\u003Ccircle cx='50' cy='50' r='50' fill='%233b5998'\u002F\u003E\u003Ccircle cx='50' cy='40' r='20' fill='%23fff'\u002F\u003E\u003Cpath d='M20 85c0-15 15-25 30-25s30 10 30 25z' fill='%23fff'\u002F\u003E\u003C\u002Fsvg\u003E\");\n  }\n  .sns-css-avatar[data-avatar=\"2\"] {\n    background-image: url(\"data:image\u002Fsvg+xml;utf8,\u003Csvg xmlns='http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg' viewBox='0 0 100 100'\u003E\u003Ccircle cx='50' cy='50' r='50' fill='%23ff5a5f'\u002F\u003E\u003Ccircle cx='50' cy='40' r='20' fill='%23fff'\u002F\u003E\u003Cpath d='M20 85c0-15 15-25 30-25s30 10 30 25z' fill='%23fff'\u002F\u003E\u003C\u002Fsvg\u003E\");\n  }\n  .sns-css-avatar[data-avatar=\"3\"] {\n    background-image: url(\"data:image\u002Fsvg+xml;utf8,\u003Csvg xmlns='http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg' viewBox='0 0 100 100'\u003E\u003Ccircle cx='50' cy='50' r='50' fill='%2300a699'\u002F\u003E\u003Ccircle cx='50' cy='40' r='20' fill='%23fff'\u002F\u003E\u003Cpath d='M20 85c0-15 15-25 30-25s30 10 30 25z' fill='%23fff'\u002F\u003E\u003C\u002Fsvg\u003E\");\n  }\n\n  .sns-user-info { display: flex; align-items: center; gap: 6px; white-space: nowrap; }\n  .sns-username { font-size: 15px; font-weight: 500; color: #333; font-family: sans-serif; }\n  .sns-dot { font-size: 14px; color: #888; }\n  .sns-age { font-size: 14px; color: #666; font-family: sans-serif; }\n\u003C\u002Fstyle\u003E"
            },
            {
              "required": true,
              "type": "image",
              "src": "${ this.files[\"FA-post0.png\"] }",
              "name": ""
            },
            {
              "required": true,
              "type": "text",
              "content": "あなたはこの内容で投稿しました。"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "つづく →",
          "submitButtonPosition": "right",
          "files": {
            "FA-post0.png": "embedded\u002F1965707c76f272c7d3ddcc11c08942fcfe4fe641f99d994079c4e3d3acb146ff.png",
            "FP-post0.png": "embedded\u002Feabcba4657a060262d410fd2c84f7806e5ea873dd1c3995ef4ae3018c203f181.png"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "run": function anonymous(
) {
const nicknameSpan = document.getElementById('show-nickname');
const ageSpan = document.getElementById('show-age');
const avatarDiv = document.getElementById('css-avatar');

if (nicknameSpan && this.state.nickname) nicknameSpan.textContent = this.state.nickname;
if (ageSpan && this.state.age) ageSpan.textContent = this.state.age;
if (avatarDiv && this.state.avatarChoice) {
  avatarDiv.style.backgroundImage = "url(\"https://api.dicebear.com/7.x/bottts/svg?seed=" + this.state.avatarChoice + "\")";
}
}
          },
          "title": "Post-pre"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "ellipse",
              "left": 300,
              "top": 250,
              "angle": 0,
              "width": 107.98,
              "height": 50,
              "stroke": "#fcbb0a",
              "strokeWidth": 1,
              "fill": "#f4e4b8"
            },
            {
              "type": "i-text",
              "left": -325,
              "top": 25,
              "angle": 0,
              "width": 659.2,
              "height": 127.46,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "数日後。\n\nあなたは、自分の投稿にどのような反応が寄せられているのか気になり、\n再びサイトを開きました。\n",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "20",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "left"
            },
            {
              "type": "i-text",
              "left": 300,
              "top": 250,
              "angle": 0,
              "width": 60,
              "height": 22.6,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "つづく",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "20",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "aoi",
              "left": 300,
              "top": 250,
              "angle": 0,
              "width": 119.38,
              "height": 50,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "goon"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "click @goon": "goon"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Postーー"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "text",
              "content": "\u003Cdiv class=\"sns-overlay-container\"\u003E\n  \n  \u003Cdiv class=\"sns-profile-header-overlay\"\u003E\n    \u003Cdiv id=\"css-avatar\" class=\"sns-css-avatar\" data-avatar=\"${this.state.avatarChoice}\"\u003E\u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"sns-user-info\"\u003E\n      \u003Cspan id=\"show-nickname\" class=\"sns-username\"\u003E加载中...\u003C\u002Fspan\u003E\n      \u003Cspan class=\"sns-dot\"\u003E•\u003C\u002Fspan\u003E\n      \u003Cspan class=\"sns-age\"\u003E\u003Cspan id=\"show-age\"\u003E--\u003C\u002Fspan\u003E歳\u003C\u002Fspan\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fdiv\u003E\n\n\u003Cstyle\u003E\n  \u002F* 🌟 全局强行解锁滚动条：不用任何外部 div 包裹，直接让 lab.js 的舞台允许滚动 *\u002F\n  :host, .nested, main, body {\n    overflow-y: auto !important;\n    height: auto !important;\n  }\n\n  .sns-overlay-container {\n    position: relative;\n    width: 100%;\n    \u002F* 用负的外边距把下面的长图“吸”上来重叠 *\u002F\n    margin-bottom: -50px; \n    z-index: 9999;\n    pointer-events: none; \n  }\n\n  \u002F* 悬浮贴纸位置 *\u002F\n  .sns-profile-header-overlay {\n    position: absolute;\n    \n    \u002F* 🛠️ 【新长图的坐标微调】\n       如果看不到，可以先把 top 改成 0，left 改成 0，看看它是不是出现在了左上角。\n       然后再用 F12 键盘方向键微调这两个数字，直到它精准覆盖这页的“匿名”：\n    *\u002F\n    top: 50px;       \u002F* 上下位置 *\u002F\n    left: 32px;     \u002F* 左右位置 *\u002F\n    \n    display: flex;\n    align-items: center;\n    gap: 10px;\n    background-color: #fff; \u002F* 纯白遮挡底色 *\u002F\n    padding-right: 50px;    \n    pointer-events: auto;   \n  }\n\n  \u002F* CSS 头像渲染 *\u002F\n  .sns-css-avatar { \n    width: 32px; height: 32px; border-radius: 50%; flex-shrink: 0; background-size: cover;\n  }\n  .sns-css-avatar[data-avatar=\"1\"] {\n    background-image: url(\"data:image\u002Fsvg+xml;utf8,\u003Csvg xmlns='http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg' viewBox='0 0 100 100'\u003E\u003Ccircle cx='50' cy='50' r='50' fill='%233b5998'\u002F\u003E\u003Ccircle cx='50' cy='40' r='20' fill='%23fff'\u002F\u003E\u003Cpath d='M20 85c0-15 15-25 30-25s30 10 30 25z' fill='%23fff'\u002F\u003E\u003C\u002Fsvg\u003E\");\n  }\n  .sns-css-avatar[data-avatar=\"2\"] {\n    background-image: url(\"data:image\u002Fsvg+xml;utf8,\u003Csvg xmlns='http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg' viewBox='0 0 100 100'\u003E\u003Ccircle cx='50' cy='50' r='50' fill='%23ff5a5f'\u002F\u003E\u003Ccircle cx='50' cy='40' r='20' fill='%23fff'\u002F\u003E\u003Cpath d='M20 85c0-15 15-25 30-25s30 10 30 25z' fill='%23fff'\u002F\u003E\u003C\u002Fsvg\u003E\");\n  }\n  .sns-css-avatar[data-avatar=\"3\"] {\n    background-image: url(\"data:image\u002Fsvg+xml;utf8,\u003Csvg xmlns='http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg' viewBox='0 0 100 100'\u003E\u003Ccircle cx='50' cy='50' r='50' fill='%2300a699'\u002F\u003E\u003Ccircle cx='50' cy='40' r='20' fill='%23fff'\u002F\u003E\u003Cpath d='M20 85c0-15 15-25 30-25s30 10 30 25z' fill='%23fff'\u002F\u003E\u003C\u002Fsvg\u003E\");\n  }\n\n  .sns-user-info { display: flex; align-items: center; gap: 6px; white-space: nowrap; }\n  .sns-username { font-size: 15px; font-weight: 500; color: #333; font-family: sans-serif; }\n  .sns-dot { font-size: 14px; color: #888; }\n  .sns-age { font-size: 14px; color: #666; font-family: sans-serif; }\n\u003C\u002Fstyle\u003E"
            },
            {
              "required": true,
              "type": "image",
              "src": "${ this.files[\"FP-post.jpg\"] }",
              "name": ""
            },
            {
              "required": true,
              "type": "text"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "つづく →",
          "submitButtonPosition": "right",
          "files": {
            "FA-post.png": "embedded\u002Ff229c941fc752395dd4e502b9b2b8bd03bb4510efdb84c48924b9abd7e990084.png",
            "FP-post.jpg": "embedded\u002F31ddf57b689d7a45d17468d98bd9467deb9b62b8182e2bac593f0b5612729a94.jpg"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "run": function anonymous(
) {
const nicknameSpan = document.getElementById('show-nickname');
const ageSpan = document.getElementById('show-age');
const avatarDiv = document.getElementById('css-avatar');

if (nicknameSpan && this.state.nickname) nicknameSpan.textContent = this.state.nickname;
if (ageSpan && this.state.age) ageSpan.textContent = this.state.age;
if (avatarDiv && this.state.avatarChoice) {
  avatarDiv.style.backgroundImage = "url(\"https://api.dicebear.com/7.x/bottts/svg?seed=" + this.state.avatarChoice + "\")";
}
}
          },
          "title": "Post"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "普段利用しているSNSと比べて、このような発信のあり方では、自分が個性や感情を持つ一人の人間というよりも、単に情報を発信する存在になったように感じる。",
                  "coding": "Q11"
                },
                {
                  "coding": "Q12",
                  "label": "普段利用しているSNSと比べて、この場では、自分の本音や実際の経験を包み隠さず表現することに、心理的な負担を感じなかった。"
                },
                {
                  "coding": "Q13",
                  "label": "それらのコメントは、単なるネット上の書き込みではなく、実際の人の考えや気持ちが伝わってくるものだった。"
                },
                {
                  "label": "自分にコメントをしてくれた人との間に、親近感が生まれていると感じる。",
                  "coding": "Q14"
                },
                {
                  "label": "このようなやり取りは、単なる情報交換というより、人と人との交流であると感じる。",
                  "coding": "Q15"
                },
                {
                  "label": "このようなやり取りを通じて、人とのつながりの意味や価値を感じる",
                  "coding": "Q16"
                }
              ],
              "width": "7",
              "anchors": [
                "全くそう思わない",
                "そう思わない",
                "あまりそう思わない",
                "どちらともいえない",
                "ややそう思う",
                "そう思う",
                "非常にそう思う"
              ],
              "label": "あなた自身が投稿したときや、その投稿に対して他の利用者からコメントが寄せられたときのことを思い浮かべながら、以下の項目にお答えください。",
              "name": "POST"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "つづく →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Post-Q",
          "width": "l"
        }
      ]
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "condition_FA",
      "skip": "${this.state.condition != 2}",
      "content": [
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "ellipse",
              "left": 313.97,
              "top": 250,
              "angle": 0,
              "width": 96.61,
              "height": 50,
              "stroke": "#0070d9",
              "strokeWidth": 1,
              "fill": "#e5f5ff"
            },
            {
              "type": "i-text",
              "left": -335.87,
              "top": -25,
              "angle": 0,
              "width": 580,
              "height": 127.46,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "そのサイトでは、多くの利用者が日常の出来事や悩みを投稿し、\nそれに対してさまざまなコメントが寄せられていました。\n\nその時、この投稿があなたの目に留まりました：\n",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "20",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "left"
            },
            {
              "type": "i-text",
              "left": 313.89,
              "top": 250,
              "angle": 0,
              "width": 60,
              "height": 22.6,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "つづく",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "20",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "aoi",
              "left": 313.14,
              "top": 250,
              "angle": 0,
              "width": 117.12,
              "height": 50,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "goon"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "click @goon": "goon"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Read-intro"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text"
            },
            {
              "required": true,
              "type": "image",
              "src": "${ this.files[\"FA-read.jpg\"] }",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "つづく→",
          "submitButtonPosition": "right",
          "files": {
            "FA-read.jpg": "embedded\u002F4e5ea3601a726810882069cecae42fd368591b1c48c2cda3433a9a3e63f07722.jpg"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Read"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "投稿者は嘘をついたり、都合よく事実を隠したりしていないと感じる。",
                  "coding": "Q1"
                },
                {
                  "label": "コメントを書いている人が、ロボットではなく、実際に人が書いているものだと感じられる。",
                  "coding": "Q2"
                },
                {
                  "label": "これらのコメントが、現実の人々の価値観や考え方を反映していると感じる。",
                  "coding": "Q3"
                },
                {
                  "label": "閲覧しているとき、この場での議論は、ネット上の話題にとどまらず、現実社会で起きていることとも結びついていると意識した。",
                  "coding": "Q4"
                },
                {
                  "label": "自分が直接関わることなく、さまざまな情報を知ることに心地よさを感じる。",
                  "coding": "Q5"
                }
              ],
              "width": "7",
              "anchors": [
                "全くそう思わない",
                "そう思わない",
                "あまりそう思わない",
                "どちらともいえない",
                "ややそう思う",
                "そう思う",
                "非常にそう思う"
              ],
              "label": "先ほどの投稿内容やそれに対するコメントを閲覧したときのことを思い浮かべながら、以下の項目にお答えください。",
              "name": "READ"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "つづく →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Read-Q",
          "width": "l"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 679.2,
              "height": 22.6,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "その後も投稿を眺め続けていると、ある投稿があなたの目に留まりました。",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "20",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "ellipse",
              "left": 300,
              "top": 225,
              "angle": 0,
              "width": 113.88,
              "height": 50,
              "stroke": "#0070d9",
              "strokeWidth": 1,
              "fill": "#c5def2"
            },
            {
              "type": "i-text",
              "left": 300,
              "top": 225,
              "angle": 0,
              "width": 60,
              "height": 22.6,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "つづく",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "20",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "aoi",
              "left": 300,
              "top": 225,
              "angle": 0,
              "width": 133.57,
              "height": 50,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "goon"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "click @goon": "goon"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Comment-intro"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text"
            },
            {
              "required": true,
              "type": "image",
              "src": "${ this.files[\"FA-comment.jpg\"] }",
              "name": ""
            },
            {
              "required": true,
              "type": "text",
              "content": "あなたはこの投稿を読み、\u003Cbr\u003Eコメントを書こうとしています。"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "つづく →",
          "submitButtonPosition": "right",
          "files": {
            "FA-comment.jpg": "embedded\u002F187013292e4e2dbc1aa843bca718975bed7c41107a7eced50f08ac0abfd56f02.jpg"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Comment"
        },
        {
          "type": "lab.html.Screen",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "run": function anonymous(
) {
const nextBtn = document.getElementById('next-btn');

// 这一页不需要读取任何 state 变量，只保留按钮点击跳转下一页的功能
if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    this.end();
  });
}
}
          },
          "title": "Comment-Imagine",
          "content": "\u003Cdiv class=\"sns-screen-wrapper\"\u003E\r\n  \r\n  \u003C!-- 1. 顶部引导语区域 --\u003E\r\n  \u003Cdiv class=\"sns-guide-group\"\u003E\r\n    \u003Ch2 class=\"sns-guide-title\"\u003E\r\n      どのようなコメントを書くか、\u003Cbr\u003Eよく考えてください。\r\n    \u003C\u002Fh2\u003E\r\n    \u003Cp class=\"sns-guide-sub\"\u003E\r\n      ※直接入力する必要はありません。頭の中で想像してください。\u003Cbr\u003E決まりましたら、下の「決めた」ボタンをクリックしてください。\r\n    \u003C\u002Fp\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n  \u003C!-- 2. SNS 固定的匿名信息展示区 --\u003E\r\n  \u003Cdiv class=\"sns-user-header\"\u003E\r\n    \u003C!-- 固定的匿名灰色头像 --\u003E\r\n    \u003Cdiv id=\"sns-avatar-box\" class=\"sns-avatar-box\"\u003E\u003C\u002Fdiv\u003E\r\n    \r\n    \u003C!-- 固定显示为匿名 --\u003E\r\n    \u003Cdiv class=\"sns-user-meta\"\u003E\r\n      \u003Cspan class=\"sns-name-text\"\u003E匿名ユーザー\u003C\u002Fspan\u003E\r\n      \u003Cspan class=\"sns-age-text\"\u003E--歳\u003C\u002Fspan\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n  \u003C!-- 3. 放大版、高质感的真实仿 SNS 评论输入框 --\u003E\r\n  \u003Cdiv class=\"sns-comment-box-area\"\u003E\r\n    \u003Cdiv class=\"sns-fake-input-large\"\u003E\r\n      コメントを追加...\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n  \u003C!-- 4. 决定的按钮 --\u003E\r\n  \u003Cdiv class=\"sns-btn-area\"\u003E\r\n    \u003Cbutton id=\"next-btn\" class=\"sns-submit-button\"\u003E決めた\u003C\u002Fbutton\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n\u003C\u002Fdiv\u003E\r\n\r\n\u003Cstyle\u003E\r\n  \u002F* 全局精美居中排版 *\u002F\r\n  .sns-screen-wrapper {\r\n    max-width: 500px;\r\n    margin: 50px auto;\r\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\r\n    padding: 20px;\r\n    background: #fff;\r\n  }\r\n  \r\n  .sns-guide-group {\r\n    text-align: center;\r\n    margin-bottom: 25px;\r\n  }\r\n\r\n  .sns-guide-title {\r\n    font-size: 19px;\r\n    font-weight: 700;\r\n    line-height: 1.5;\r\n    color: #222;\r\n    margin: 0 0 8px 0;\r\n  }\r\n\r\n  \u002F* 副标题字体调小 (保持 12px) *\u002F\r\n  .sns-guide-sub {\r\n    font-size: 12px;\r\n    color: #777;\r\n    margin: 0;\r\n    line-height: 1.4;\r\n  }\r\n\r\n  \u002F* 个人信息栏：独占一行 *\u002F\r\n  .sns-user-header {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 15px;\r\n    padding-left: 5px;\r\n  }\r\n\r\n  \u002F* 固定的匿名灰色头像样式 *\u002F\r\n  .sns-avatar-box {\r\n    width: 42px;\r\n    height: 42px;\r\n    border-radius: 50%;\r\n    flex-shrink: 0;\r\n    background-size: cover;\r\n    margin-right: 12px;\r\n    \u002F* 直接内置一个标准的灰色匿名头像 *\u002F\r\n    background-image: url(\"data:image\u002Fsvg+xml;utf8,\u003Csvg xmlns='http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg' viewBox='0 0 100 100'\u003E\u003Ccircle cx='50' cy='50' r='50' fill='%23999999'\u002F\u003E\u003Ccircle cx='50' cy='40' r='20' fill='%23fff'\u002F\u003E\u003Cpath d='M20 85c0-15 15-25 30-25s30 10 30 25z' fill='%23fff'\u002F\u003E\u003C\u002Fsvg\u003E\");\r\n  }\r\n\r\n  \u002F* 名字和年龄结构 *\u002F\r\n  .sns-user-meta {\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: left;\r\n  }\r\n  .sns-name-text {\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    color: #555;\r\n  }\r\n  .sns-age-text {\r\n    font-size: 13px;\r\n    color: #657786;\r\n    margin-top: 2px;\r\n  }\r\n\r\n  .sns-comment-box-area {\r\n    width: 100%;\r\n    margin-bottom: 20px;\r\n  }\r\n  .sns-fake-input-large {\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    font-size: 15px;\r\n    color: #888;\r\n    background: #f5f8fa;\r\n    padding: 18px 20px;\r\n    border-radius: 16px;\r\n    border: 1px solid #e1e8ed;\r\n    cursor: default;\r\n    user-select: none;\r\n    min-height: 100px;\r\n    text-align: left;\r\n  }\r\n\r\n  .sns-btn-area {\r\n    text-align: center;\r\n    margin-top: 40px;\r\n  }\r\n  .sns-submit-button {\r\n    background-color: #1da1f2;\r\n    color: white;\r\n    border: none;\r\n    padding: 12px 50px;\r\n    border-radius: 24px;\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    box-shadow: 0 2px 4px rgba(0,0,0,0.1);\r\n  }\r\n\u003C\u002Fstyle\u003E"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 544,
              "height": 36.16,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "あなたのコメントが投稿されました。",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "ーーー",
          "timeout": "5000"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "投稿者がどのような人（性別や年齢など）かにかかわらず、投稿内容そのものに注目してコメントを書いた。",
                  "coding": "Q6"
                },
                {
                  "label": "普段利用しているSNS（XやInstagramなど）よりも、率直に自分の意見を表現できると思う。",
                  "coding": "Q7"
                },
                {
                  "coding": "Q8",
                  "label": "投稿者本人から、自分や自分のコメントがどのように見られるかを気にする。"
                },
                {
                  "label": "投稿者以外の他の利用者から、自分や自分のコメントがどのように見られるかを気にする。",
                  "coding": "Q9"
                },
                {
                  "label": "この場では、コメントを自己呈示の一環として捉え、他者にどのような印象を与えるかを意識していた。",
                  "coding": "Q10"
                }
              ],
              "width": "7",
              "anchors": [
                "全くそう思わない",
                "そう思わない",
                "あまりそう思わない",
                "どちらともいえない",
                "ややそう思う",
                "そう思う",
                "非常にそう思う"
              ],
              "label": "投稿内容を読み、それに対してコメントをしたときのことを思い浮かべながら、以下の項目にお答えください。",
              "name": "COMMENT"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "つづく →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Comment-Q",
          "width": "l"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "ellipse",
              "left": 262.15,
              "top": 250,
              "angle": 0,
              "width": 80.14,
              "height": 50,
              "stroke": "#0070d9",
              "strokeWidth": 1,
              "fill": "#cbe4ec"
            },
            {
              "type": "i-text",
              "left": -335.01,
              "top": -10.01,
              "angle": 0,
              "width": 679.2,
              "height": 179.9,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "いろいろな投稿を見るうちに、\nあなた自身にも誰かに聞いてほしい出来事があることを思い出しました。\n\n最近は、家族との間で少しすれ違いがあり、気持ちが落ち込んでいました。\n\n身近な人には相談しづらかったため、\nあなたはこのサイトに自分の気持ちを投稿しました。",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "20",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "left"
            },
            {
              "type": "i-text",
              "left": 264.99,
              "top": 250,
              "angle": 0,
              "width": 54,
              "height": 20.34,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "つづく",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "18",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "aoi",
              "left": 262.9,
              "top": 250,
              "angle": 0,
              "width": 101.2,
              "height": 50,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "goon"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "click @goon": "goon"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Post-intro"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text"
            },
            {
              "required": true,
              "type": "image",
              "src": "${ this.files[\"FA-post0.png\"] }",
              "name": ""
            },
            {
              "required": true,
              "type": "text",
              "content": "あなたはこの内容で投稿しました。"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "つづく →",
          "submitButtonPosition": "right",
          "files": {
            "FA-post0.png": "embedded\u002F1965707c76f272c7d3ddcc11c08942fcfe4fe641f99d994079c4e3d3acb146ff.png"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Post-pre"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "ellipse",
              "left": 300,
              "top": 250,
              "angle": 0,
              "width": 107.98,
              "height": 50,
              "stroke": "#fcbb0a",
              "strokeWidth": 1,
              "fill": "#f4e4b8"
            },
            {
              "type": "i-text",
              "left": -325,
              "top": 25,
              "angle": 0,
              "width": 659.2,
              "height": 127.46,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "数日後。\n\nあなたは、自分の投稿にどのような反応が寄せられているのか気になり、\n再びサイトを開きました。\n",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "20",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "left"
            },
            {
              "type": "i-text",
              "left": 300,
              "top": 250,
              "angle": 0,
              "width": 60,
              "height": 22.6,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "つづく",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "20",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "aoi",
              "left": 300,
              "top": 250,
              "angle": 0,
              "width": 119.38,
              "height": 50,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "goon"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "click @goon": "goon"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Postーー"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text"
            },
            {
              "required": true,
              "type": "image",
              "src": "${ this.files[\"FA-post.png\"] }",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "つづく →",
          "submitButtonPosition": "right",
          "files": {
            "FA-post.png": "embedded\u002Ff229c941fc752395dd4e502b9b2b8bd03bb4510efdb84c48924b9abd7e990084.png"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Post"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "普段利用しているSNSと比べて、このような発信のあり方では、自分が個性や感情を持つ一人の人間というよりも、単に情報を発信する存在になったように感じる。",
                  "coding": "Q11"
                },
                {
                  "coding": "Q12",
                  "label": "普段利用しているSNSと比べて、この場では、自分の本音や実際の経験を包み隠さず表現することに、心理的な負担を感じなかった。"
                },
                {
                  "coding": "Q13",
                  "label": "それらのコメントは、単なるネット上の書き込みではなく、実際の人の考えや気持ちが伝わってくるものだった。"
                },
                {
                  "label": "自分にコメントをしてくれた人との間に、親近感が生まれていると感じる。",
                  "coding": "Q14"
                },
                {
                  "label": "このようなやり取りは、単なる情報交換というより、人と人との交流であると感じる。",
                  "coding": "Q15"
                },
                {
                  "label": "このようなやり取りを通じて、人とのつながりの意味や価値を感じる",
                  "coding": "Q16"
                }
              ],
              "width": "7",
              "anchors": [
                "全くそう思わない",
                "そう思わない",
                "あまりそう思わない",
                "どちらともいえない",
                "ややそう思う",
                "そう思う",
                "非常にそう思う"
              ],
              "label": "あなた自身が投稿したときや、その投稿に対して他の利用者からコメントが寄せられたときのことを思い浮かべながら、以下の項目にお答えください。",
              "name": "POST"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "つづく →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Post-Q",
          "width": "l"
        }
      ]
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "condition_MIX",
      "skip": "${this.state.condition != 3}",
      "content": [
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "ellipse",
              "left": 313.97,
              "top": 250,
              "angle": 0,
              "width": 96.61,
              "height": 50,
              "stroke": "#0070d9",
              "strokeWidth": 1,
              "fill": "#e5f5ff"
            },
            {
              "type": "i-text",
              "left": -335.87,
              "top": -25,
              "angle": 0,
              "width": 580,
              "height": 127.46,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "そのサイトでは、多くの利用者が日常の出来事や悩みを投稿し、\nそれに対してさまざまなコメントが寄せられていました。\n\nその時、この投稿があなたの目に留まりました：\n",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "20",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "left"
            },
            {
              "type": "i-text",
              "left": 313.89,
              "top": 250,
              "angle": 0,
              "width": 60,
              "height": 22.6,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "つづく",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "20",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "aoi",
              "left": 313.14,
              "top": 250,
              "angle": 0,
              "width": 117.12,
              "height": 50,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "goon"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "click @goon": "goon"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Read-intro"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text"
            },
            {
              "required": true,
              "type": "image",
              "src": "${ this.files[\"MIX-read.jpg\"] }",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "つづく→",
          "submitButtonPosition": "right",
          "files": {
            "FA-read.jpg": "embedded\u002F4e5ea3601a726810882069cecae42fd368591b1c48c2cda3433a9a3e63f07722.jpg",
            "MIX-read.jpg": "embedded\u002F2234b335ee15b68d148dc21484d0daf5d47fbdc5b859f5208264cfbcef528062.jpg"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Read"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "投稿者は嘘をついたり、都合よく事実を隠したりしていないと感じる。",
                  "coding": "Q1"
                },
                {
                  "label": "コメントを書いている人が、ロボットではなく、実際に人が書いているものだと感じられる。",
                  "coding": "Q2"
                },
                {
                  "label": "これらのコメントが、現実の人々の価値観や考え方を反映していると感じる。",
                  "coding": "Q3"
                },
                {
                  "label": "閲覧しているとき、この場での議論は、ネット上の話題にとどまらず、現実社会で起きていることとも結びついていると意識した。",
                  "coding": "Q4"
                },
                {
                  "label": "自分が直接関わることなく、さまざまな情報を知ることに心地よさを感じる。",
                  "coding": "Q5"
                }
              ],
              "width": "7",
              "anchors": [
                "全くそう思わない",
                "そう思わない",
                "あまりそう思わない",
                "どちらともいえない",
                "ややそう思う",
                "そう思う",
                "非常にそう思う"
              ],
              "label": "先ほどの投稿内容やそれに対するコメントを閲覧したときのことを思い浮かべながら、以下の項目にお答えください。",
              "name": "READ"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "つづく →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Read-Q",
          "width": "l"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 679.2,
              "height": 22.6,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "その後も投稿を眺め続けていると、ある投稿があなたの目に留まりました。",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "20",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "ellipse",
              "left": 300,
              "top": 225,
              "angle": 0,
              "width": 113.88,
              "height": 50,
              "stroke": "#0070d9",
              "strokeWidth": 1,
              "fill": "#c5def2"
            },
            {
              "type": "i-text",
              "left": 300,
              "top": 225,
              "angle": 0,
              "width": 60,
              "height": 22.6,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "つづく",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "20",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "aoi",
              "left": 300,
              "top": 225,
              "angle": 0,
              "width": 133.57,
              "height": 50,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "goon"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "click @goon": "goon"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Comment-intro"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text"
            },
            {
              "required": true,
              "type": "image",
              "src": "${ this.files[\"MIX-comment.jpg\"] }",
              "name": ""
            },
            {
              "required": true,
              "type": "text",
              "content": "あなたはこの投稿を読み、\u003Cbr\u003Eコメントを書こうとしています。"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "つづく →",
          "submitButtonPosition": "right",
          "files": {
            "FA-comment.jpg": "embedded\u002F187013292e4e2dbc1aa843bca718975bed7c41107a7eced50f08ac0abfd56f02.jpg",
            "MIX-comment.jpg": "embedded\u002Fc80222cb60acdcc6f3b27761cd37547c311c9f9673a46239c38376312191ac82.jpg"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Comment"
        },
        {
          "type": "lab.html.Screen",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "run": function anonymous(
) {
// 1. 抓取页面上的名字、年龄、头像节点，以及下一页按钮
const nameSpan = document.getElementById('sns-name-text');
const ageSpan = document.getElementById('sns-age-text');
const avatarDiv = document.getElementById('sns-avatar-box');
const nextBtn = document.getElementById('next-btn');

// 2. 强行渲染用户名
if (nameSpan && this.state.nickname) {
  nameSpan.textContent = this.state.nickname;
} else if (nameSpan) {
  nameSpan.textContent = "匿名ユーザー";
}

// 3. 强行渲染年龄
if (ageSpan && this.state.age) {
  ageSpan.textContent = this.state.age + "歳";
}

// 4. 渲染与 profile 页一致的 dicebear 头像
if (avatarDiv && this.state.avatarChoice) {
  const choice = this.state.avatarChoice;
  avatarDiv.style.backgroundImage = "url(\"https://api.dicebear.com/7.x/bottts/svg?seed=" + choice + "\")";
}

// 5. 让“决定的按钮”点击后可以跳到下一页
if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    this.end();
  });
}
}
          },
          "title": "Comment-Imagine",
          "content": "\u003Cdiv class=\"sns-screen-wrapper\"\u003E\r\n  \r\n  \u003C!-- 1. 顶部引导语区域 --\u003E\r\n  \u003Cdiv class=\"sns-guide-group\"\u003E\r\n    \u003Ch2 class=\"sns-guide-title\"\u003E\r\n      どのようなコメントを書くか、\u003Cbr\u003Eよく考えてください。\r\n    \u003C\u002Fh2\u003E\r\n    \u003Cp class=\"sns-guide-sub\"\u003E\r\n      ※直接入力する必要はありません。頭の中で想像してください。\u003Cbr\u003E決まりましたら、下の「決めた」ボタンをクリックしてください。\r\n    \u003C\u002Fp\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n  \u003C!-- 2. 用户头像与信息展示区 --\u003E\r\n  \u003Cdiv class=\"sns-user-header\"\u003E\r\n    \u003Cdiv id=\"sns-avatar-box\" class=\"sns-avatar-box\"\u003E\u003C\u002Fdiv\u003E\r\n    \r\n    \u003Cdiv class=\"sns-user-meta\"\u003E\r\n      \u003Cspan id=\"sns-name-text\" class=\"sns-name-text\"\u003E加载中...\u003C\u002Fspan\u003E\r\n      \u003Cspan id=\"sns-age-text\" class=\"sns-age-text\"\u003E--\u003C\u002Fspan\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n  \u003C!-- 3. 评论输入框 --\u003E\r\n  \u003Cdiv class=\"sns-comment-box-area\"\u003E\r\n    \u003Cdiv class=\"sns-fake-input-large\"\u003E\r\n      コメントを追加...\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n  \u003C!-- 4. 提交按钮 --\u003E\r\n  \u003Cdiv class=\"sns-btn-area\"\u003E\r\n    \u003Cbutton id=\"next-btn\" class=\"sns-submit-button\"\u003E決めた\u003C\u002Fbutton\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n\u003C\u002Fdiv\u003E\r\n\r\n\u003Cstyle\u003E\r\n  \u002F* 全局精美居中排版 *\u002F\r\n  .sns-screen-wrapper {\r\n    max-width: 500px;\r\n    margin: 50px auto;\r\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\r\n    padding: 20px;\r\n    background: #fff;\r\n  }\r\n  \r\n  .sns-guide-group {\r\n    text-align: center;\r\n    margin-bottom: 25px;\r\n  }\r\n\r\n  .sns-guide-title {\r\n    font-size: 19px;\r\n    font-weight: 700;\r\n    line-height: 1.5;\r\n    color: #222;\r\n    margin: 0 0 8px 0;\r\n  }\r\n\r\n  \u002F* 副标题字体调小 *\u002F\r\n  .sns-guide-sub {\r\n    font-size: 12px;\r\n    color: #777;\r\n    margin: 0;\r\n    line-height: 1.4;\r\n  }\r\n\r\n  .sns-user-header {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 15px;\r\n    padding-left: 5px;\r\n  }\r\n\r\n  .sns-avatar-box {\r\n    width: 42px;\r\n    height: 42px;\r\n    border-radius: 50%;\r\n    flex-shrink: 0;\r\n    background-size: cover;\r\n    margin-right: 12px;\r\n    background-color: #eee;\r\n  }\r\n\r\n  .sns-user-meta {\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: left;\r\n  }\r\n  .sns-name-text {\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    color: #14171a;\r\n  }\r\n  .sns-age-text {\r\n    font-size: 13px;\r\n    color: #657786;\r\n    margin-top: 2px;\r\n  }\r\n\r\n  .sns-comment-box-area {\r\n    width: 100%;\r\n    margin-bottom: 20px;\r\n  }\r\n  .sns-fake-input-large {\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    font-size: 15px;\r\n    color: #888;\r\n    background: #f5f8fa;\r\n    padding: 18px 20px;\r\n    border-radius: 16px;\r\n    border: 1px solid #e1e8ed;\r\n    cursor: default;\r\n    user-select: none;\r\n    min-height: 100px;\r\n    text-align: left;\r\n  }\r\n\r\n  .sns-btn-area {\r\n    text-align: center;\r\n    margin-top: 40px;\r\n  }\r\n  .sns-submit-button {\r\n    background-color: #1da1f2;\r\n    color: white;\r\n    border: none;\r\n    padding: 12px 50px;\r\n    border-radius: 24px;\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    box-shadow: 0 2px 4px rgba(0,0,0,0.1);\r\n  }\r\n\u003C\u002Fstyle\u003E"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 544,
              "height": 36.16,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "あなたのコメントが投稿されました。",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "ーーー",
          "timeout": "5000"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "投稿者がどのような人（性別や年齢など）かにかかわらず、投稿内容そのものに注目してコメントを書いた。",
                  "coding": "Q6"
                },
                {
                  "label": "普段利用しているSNS（XやInstagramなど）よりも、率直に自分の意見を表現できると思う。",
                  "coding": "Q7"
                },
                {
                  "coding": "Q8",
                  "label": "投稿者本人から、自分や自分のコメントがどのように見られるかを気にする。"
                },
                {
                  "label": "投稿者以外の他の利用者から、自分や自分のコメントがどのように見られるかを気にする。",
                  "coding": "Q9"
                },
                {
                  "label": "この場では、コメントを自己呈示の一環として捉え、他者にどのような印象を与えるかを意識していた。",
                  "coding": "Q10"
                }
              ],
              "width": "7",
              "anchors": [
                "全くそう思わない",
                "そう思わない",
                "あまりそう思わない",
                "どちらともいえない",
                "ややそう思う",
                "そう思う",
                "非常にそう思う"
              ],
              "label": "投稿内容を読み、それに対してコメントをしたときのことを思い浮かべながら、以下の項目にお答えください。",
              "name": "COMMENT"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "つづく →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Comment-Q",
          "width": "l"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "ellipse",
              "left": 262.15,
              "top": 250,
              "angle": 0,
              "width": 80.14,
              "height": 50,
              "stroke": "#0070d9",
              "strokeWidth": 1,
              "fill": "#cbe4ec"
            },
            {
              "type": "i-text",
              "left": -335.01,
              "top": -10.01,
              "angle": 0,
              "width": 679.2,
              "height": 179.9,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "いろいろな投稿を見るうちに、\nあなた自身にも誰かに聞いてほしい出来事があることを思い出しました。\n\n最近は、家族との間で少しすれ違いがあり、気持ちが落ち込んでいました。\n\n身近な人には相談しづらかったため、\nあなたはこのサイトに自分の気持ちを投稿しました。",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "20",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "left"
            },
            {
              "type": "i-text",
              "left": 264.99,
              "top": 250,
              "angle": 0,
              "width": 54,
              "height": 20.34,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "つづく",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "18",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "aoi",
              "left": 264.9,
              "top": 250,
              "angle": 0,
              "width": 101.2,
              "height": 50,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "goon"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "click @goon": "goon"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Post-intro"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text"
            },
            {
              "required": true,
              "type": "image",
              "src": "${ this.files[\"FA-post0.png\"] }",
              "name": ""
            },
            {
              "required": true,
              "type": "text",
              "content": "あなたはこの内容で投稿しました。"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "つづく →",
          "submitButtonPosition": "right",
          "files": {
            "FA-post0.png": "embedded\u002F1965707c76f272c7d3ddcc11c08942fcfe4fe641f99d994079c4e3d3acb146ff.png"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Post-pre"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "ellipse",
              "left": 300,
              "top": 250,
              "angle": 0,
              "width": 107.98,
              "height": 50,
              "stroke": "#fcbb0a",
              "strokeWidth": 1,
              "fill": "#f4e4b8"
            },
            {
              "type": "i-text",
              "left": -325,
              "top": 25,
              "angle": 0,
              "width": 659.2,
              "height": 127.46,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "数日後。\n\nあなたは、自分の投稿にどのような反応が寄せられているのか気になり、\n再びサイトを開きました。\n",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "20",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "left"
            },
            {
              "type": "i-text",
              "left": 300,
              "top": 250,
              "angle": 0,
              "width": 60,
              "height": 22.6,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "つづく",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "20",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "aoi",
              "left": 300,
              "top": 250,
              "angle": 0,
              "width": 119.38,
              "height": 50,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "goon"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "click @goon": "goon"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Postーー"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text"
            },
            {
              "required": true,
              "type": "image",
              "src": "${ this.files[\"MIX-post.jpg\"] }",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "つづく →",
          "submitButtonPosition": "right",
          "files": {
            "FA-post.png": "embedded\u002Ff229c941fc752395dd4e502b9b2b8bd03bb4510efdb84c48924b9abd7e990084.png",
            "MIX-post.jpg": "embedded\u002Ffd17cdfe00f1fe046b93aad5958a002eae695e5efd23e66386fae14a853731f7.jpg"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Post"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "普段利用しているSNSと比べて、このような発信のあり方では、自分が個性や感情を持つ一人の人間というよりも、単に情報を発信する存在になったように感じる。",
                  "coding": "Q11"
                },
                {
                  "coding": "Q12",
                  "label": "普段利用しているSNSと比べて、この場では、自分の本音や実際の経験を包み隠さず表現することに、心理的な負担を感じなかった。"
                },
                {
                  "coding": "Q13",
                  "label": "それらのコメントは、単なるネット上の書き込みではなく、実際の人の考えや気持ちが伝わってくるものだった。"
                },
                {
                  "label": "自分にコメントをしてくれた人との間に、親近感が生まれていると感じる。",
                  "coding": "Q14"
                },
                {
                  "label": "このようなやり取りは、単なる情報交換というより、人と人との交流であると感じる。",
                  "coding": "Q15"
                },
                {
                  "label": "このようなやり取りを通じて、人とのつながりの意味や価値を感じる",
                  "coding": "Q16"
                }
              ],
              "width": "7",
              "anchors": [
                "全くそう思わない",
                "そう思わない",
                "あまりそう思わない",
                "どちらともいえない",
                "ややそう思う",
                "そう思う",
                "非常にそう思う"
              ],
              "label": "あなた自身が投稿したときや、その投稿に対して他の利用者からコメントが寄せられたときのことを思い浮かべながら、以下の項目にお答えください。",
              "name": "POST"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "つづく →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Post-Q",
          "width": "l"
        }
      ]
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "以上で実験は終了です。ご参加いただき、ありがとうございました。\n"
        },
        {
          "required": true,
          "type": "text",
          "content": "本実験では、SNS上における匿名性・擬名性の違いが、利用者の体験や満足感にどのような影響を与えるのかを調査しています。\n\n参加者は実験開始時にランダムに、①投稿者・コメント投稿者ともに匿名で表示される条件、②投稿者・コメント投稿者ともに擬名で表示される条件、③投稿者は匿名、コメント投稿者は擬名で表示される条件、のいずれか1つに割り当てられていました。\n\n本研究では、それぞれの条件における利用体験や感じ方、満足感の違いを比較・検討することを目的としています。"
        },
        {
          "required": true,
          "type": "text",
          "content": "\nなお、実験中に入力していただいたニックネームや年齢は、実験上の設定のために使用したものであり、研究データとして収集・分析することはありません。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "つづく→",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Inform2",
      "width": "l"
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cp style=\"font-weight: bold; font-size: 1.1rem;\"\u003E\n  あなたの完了コードは：\u003Cspan style=\"color: #d9534f;\"\u003E${ state.participantID }\u003C\u002Fspan\u003E\n\u003C\u002Fp\u003E\n\u003Cp style=\"color: #555;\"\u003E\n  ※こちらのIDは必ず手控えるか、メモを取ってください。\n\u003C\u002Fp\u003E\n\n\u003Chr style=\"margin: 20px 0; border: none; border-top: 1px solid #ccc;\"\u003E\n\n\u003Cform\u003E\n  \u003Cp\u003E本実験で得られた回答データを研究目的で利用することに同意しますか。\u003C\u002Fp\u003E\n\n\u003Clabel\u003E\n    \u003Cinput type=\"radio\" name=\"consent\" value=\"yes\" required\u003E\n    同意する\n  \u003C\u002Flabel\u003E\n  \u003Cbr\u003E\n\n  \u003Clabel\u003E\n    \u003Cinput type=\"radio\" name=\"consent\" value=\"no\" required\u003E\n    同意しない\n  \u003C\u002Flabel\u003E\n\n  \u003Cbr\u003E\u003Cbr\u003E\n  \u003Cbutton type=\"submit\"\u003E送信\u003C\u002Fbutton\u003E\n\u003C\u002Fform\u003E",
      "scrollTop": true,
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "after:end": function anonymous(
) {
//check Tardy
//ファイル名をランダムIDにする
const participantID = this.random.uuid4()

//csvファイルで保存する場合
const filename = participantID + "_data.csv"
const data = study.internals.controller.datastore.exportCsv();

fetch("https://pipe.jspsych.org/api/data/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
  body: JSON.stringify({
    experimentID: "ySsRMCy56sAr",
    filename: filename,
    data: data,
  }),
});

}
      },
      "title": "Over"
    }
  ]
})

// Let's go!
study.run()