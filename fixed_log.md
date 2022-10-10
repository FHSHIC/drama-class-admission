# fixed logs

1. fixed: 學校聯絡電話版型修改 \
   不要都分行，在 md 底下分行就好，不然有點怪。
2. fixed: 修改掉"戲劇班官網"及"臉書粉絲專頁"按鈕的排版方式 \
   這邊可以利用 flex flex-col md:flex-row 就可以控制排版模式。
3. fixed: 修改 src/index.css 的 a 屬性 \
   這邊把 src/index.css 的 a 屬性 改為 a.news-item，並把 index.html 中的 最新消息下每個連結增加 class "news-item"。
4. feat: 新增 src/index.css 的 屬性 a.link \
   這邊為了整體方便修改，將屬性收攏回 index.css。
5. fixed: 修正點不到連結問題 \
   把 -z-50 取消，因為整體遮罩被 \<body\> 蓋住了，所以當然點不到...
6. feat: 串聯至 google form api \
   這邊把它串聯到 google form api 來得到資料。
