amis.define('docs/zh-CN/components/card.md', function(require, exports, module, define) {

  module.exports = {
    "title": "Card 卡片",
    "description": null,
    "type": 0,
    "group": "⚙ 组件",
    "menuName": "Card 卡片",
    "icon": null,
    "order": 31,
    "html": "<div class=\"markdown-body\"><h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" href=\"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本用法</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"card\",\n    \"header\": {\n        \"title\": \"标题\",\n        \"subTitle\": \"副标题\",\n        \"description\": \"这是一段描述\",\n        \"avatarClassName\": \"pull-left thumb-md avatar b-3x m-r\",\n        \"avatar\": \"data:image/svg+xml,%3C%3Fxml version='1.0' standalone='no'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg t='1631083237695' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='2420' xmlns:xlink='http://www.w3.org/1999/xlink' width='1024' height='1024'%3E%3Cdefs%3E%3Cstyle type='text/css'%3E%3C/style%3E%3C/defs%3E%3Cpath d='M959.872 128c0.032 0.032 0.096 0.064 0.128 0.128v767.776c-0.032 0.032-0.064 0.096-0.128 0.128H64.096c-0.032-0.032-0.096-0.064-0.128-0.128V128.128c0.032-0.032 0.064-0.096 0.128-0.128h895.776zM960 64H64C28.8 64 0 92.8 0 128v768c0 35.2 28.8 64 64 64h896c35.2 0 64-28.8 64-64V128c0-35.2-28.8-64-64-64z' p-id='2421' fill='%23bfbfbf'%3E%3C/path%3E%3Cpath d='M832 288c0 53.024-42.976 96-96 96s-96-42.976-96-96 42.976-96 96-96 96 42.976 96 96zM896 832H128V704l224-384 256 320h64l224-192z' p-id='2422' fill='%23bfbfbf'%3E%3C/path%3E%3C/svg%3E\"\n    },\n    \"body\": \"这里是内容\",\n    \"actions\": [\n        {\n            \"type\": \"button\",\n            \"label\": \"编辑\",\n            \"actionType\": \"dialog\",\n            \"dialog\": {\n              \"title\": \"编辑\",\n              \"body\": \"你正在编辑该卡片\"\n            }\n        },\n        {\n          \"type\": \"button\",\n          \"label\": \"删除\",\n          \"actionType\": \"dialog\",\n          \"dialog\": {\n            \"title\": \"提示\",\n            \"body\": \"你删掉了该卡片\"\n          }\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E6%89%93%E5%BC%80%E9%93%BE%E6%8E%A5\" href=\"#%E6%89%93%E5%BC%80%E9%93%BE%E6%8E%A5\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>打开链接</h2><blockquote>\n<p>1.4.0 及以上版本</p>\n</blockquote>\n<p>通过 <code>href</code> 属性可以设置点击卡片打开外部链接</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"card\",\n    \"href\": \"https://github.com/baidu/amis\",\n    \"header\": {\n        \"title\": \"标题\",\n        \"subTitle\": \"副标题\",\n        \"description\": \"这是一段描述\",\n        \"avatarClassName\": \"pull-left thumb-md avatar b-3x m-r\",\n        \"avatar\": \"data:image/svg+xml,%3C%3Fxml version='1.0' standalone='no'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg t='1631083237695' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='2420' xmlns:xlink='http://www.w3.org/1999/xlink' width='1024' height='1024'%3E%3Cdefs%3E%3Cstyle type='text/css'%3E%3C/style%3E%3C/defs%3E%3Cpath d='M959.872 128c0.032 0.032 0.096 0.064 0.128 0.128v767.776c-0.032 0.032-0.064 0.096-0.128 0.128H64.096c-0.032-0.032-0.096-0.064-0.128-0.128V128.128c0.032-0.032 0.064-0.096 0.128-0.128h895.776zM960 64H64C28.8 64 0 92.8 0 128v768c0 35.2 28.8 64 64 64h896c35.2 0 64-28.8 64-64V128c0-35.2-28.8-64-64-64z' p-id='2421' fill='%23bfbfbf'%3E%3C/path%3E%3Cpath d='M832 288c0 53.024-42.976 96-96 96s-96-42.976-96-96 42.976-96 96-96 96 42.976 96 96zM896 832H128V704l224-384 256 320h64l224-192z' p-id='2422' fill='%23bfbfbf'%3E%3C/path%3E%3C/svg%3E\"\n    },\n    \"body\": \"这里是内容\",\n    \"actions\": [\n        {\n            \"type\": \"button\",\n            \"label\": \"编辑\",\n            \"actionType\": \"dialog\",\n            \"dialog\": {\n              \"title\": \"编辑\",\n              \"body\": \"你正在编辑该卡片\"\n            }\n        },\n        {\n          \"type\": \"button\",\n          \"label\": \"删除\",\n          \"actionType\": \"dialog\",\n          \"dialog\": {\n            \"title\": \"提示\",\n            \"body\": \"你删掉了该卡片\"\n          }\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E7%82%B9%E5%87%BB%E5%8D%A1%E7%89%87%E7%9A%84%E8%A1%8C%E4%B8%BA\" href=\"#%E7%82%B9%E5%87%BB%E5%8D%A1%E7%89%87%E7%9A%84%E8%A1%8C%E4%B8%BA\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>点击卡片的行为</h2><blockquote>\n<p>1.4.0 及以上版本</p>\n</blockquote>\n<p>通过设置 <code>itemAction</code> 可以设置整个卡片的点击行为</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"card\",\n    \"itemAction\": {\n      \"type\": \"button\",\n      \"actionType\": \"dialog\",\n      \"dialog\": {\n        \"title\": \"详情\",\n        \"body\": \"当前描述\"\n      }\n    },\n    \"header\": {\n        \"title\": \"标题\",\n        \"subTitle\": \"副标题\",\n        \"description\": \"这是一段描述\",\n        \"avatarClassName\": \"pull-left thumb-md avatar b-3x m-r\",\n        \"avatar\": \"data:image/svg+xml,%3C%3Fxml version='1.0' standalone='no'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg t='1631083237695' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='2420' xmlns:xlink='http://www.w3.org/1999/xlink' width='1024' height='1024'%3E%3Cdefs%3E%3Cstyle type='text/css'%3E%3C/style%3E%3C/defs%3E%3Cpath d='M959.872 128c0.032 0.032 0.096 0.064 0.128 0.128v767.776c-0.032 0.032-0.064 0.096-0.128 0.128H64.096c-0.032-0.032-0.096-0.064-0.128-0.128V128.128c0.032-0.032 0.064-0.096 0.128-0.128h895.776zM960 64H64C28.8 64 0 92.8 0 128v768c0 35.2 28.8 64 64 64h896c35.2 0 64-28.8 64-64V128c0-35.2-28.8-64-64-64z' p-id='2421' fill='%23bfbfbf'%3E%3C/path%3E%3Cpath d='M832 288c0 53.024-42.976 96-96 96s-96-42.976-96-96 42.976-96 96-96 96 42.976 96 96zM896 832H128V704l224-384 256 320h64l224-192z' p-id='2422' fill='%23bfbfbf'%3E%3C/path%3E%3C/svg%3E\"\n    },\n    \"body\": \"这里是内容\"\n}\n</script></div><div class=\"markdown-body\">\n<p>注意它和前面的 <code>href</code> 配置冲突，如果设置了 <code>href</code> 这个将不会生效</p>\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>type</td>\n<td><code>string</code></td>\n<td><code>&quot;card&quot;</code></td>\n<td>指定为 Card 渲染器</td>\n</tr>\n<tr>\n<td>className</td>\n<td><code>string</code></td>\n<td><code>&quot;panel-default&quot;</code></td>\n<td>外层 Dom 的类名</td>\n</tr>\n<tr>\n<td>href</td>\n<td><a href=\"../../docs/concepts/template\">模板</a></td>\n<td></td>\n<td>外部链接</td>\n</tr>\n<tr>\n<td>header</td>\n<td><code>Object</code></td>\n<td></td>\n<td>Card 头部内容设置</td>\n</tr>\n<tr>\n<td>header.className</td>\n<td><code>string</code></td>\n<td></td>\n<td>头部类名</td>\n</tr>\n<tr>\n<td>header.title</td>\n<td><a href=\"../../docs/concepts/template\">模板</a></td>\n<td></td>\n<td>标题</td>\n</tr>\n<tr>\n<td>header.subTitle</td>\n<td><a href=\"../../docs/concepts/template\">模板</a></td>\n<td></td>\n<td>副标题</td>\n</tr>\n<tr>\n<td>header.desc</td>\n<td><a href=\"../../docs/concepts/template\">模板</a></td>\n<td></td>\n<td>描述</td>\n</tr>\n<tr>\n<td>header.avatar</td>\n<td><a href=\"../../docs/concepts/template\">模板</a></td>\n<td></td>\n<td>图片</td>\n</tr>\n<tr>\n<td>header.avatarText</td>\n<td><a href=\"../../docs/concepts/template\">模板</a></td>\n<td></td>\n<td>如果不配置图片，则会在图片处显示该文本</td>\n</tr>\n<tr>\n<td>header.highlight</td>\n<td><code>boolean</code></td>\n<td></td>\n<td>是否显示激活样式</td>\n</tr>\n<tr>\n<td>header.avatarClassName</td>\n<td><code>string</code></td>\n<td><code>&quot;pull-left thumb avatar b-3x m-r&quot;</code></td>\n<td>图片类名</td>\n</tr>\n<tr>\n<td>body</td>\n<td><code>Array</code></td>\n<td></td>\n<td>内容容器，主要用来放置非表单项组件</td>\n</tr>\n<tr>\n<td>bodyClassName</td>\n<td><code>string</code></td>\n<td><code>&quot;padder m-t-sm m-b-sm&quot;</code></td>\n<td>内容区域类名</td>\n</tr>\n<tr>\n<td>actions</td>\n<td>Array&lt;<a href=\"./action\">Action</a>&gt;</td>\n<td></td>\n<td>配置按钮集合</td>\n</tr>\n<tr>\n<td>itemAction</td>\n<td><a href=\"./action\">Action</a></td>\n<td></td>\n<td>点击卡片的行为</td>\n</tr>\n</tbody></table>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "基本用法",
          "fragment": "%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "fullPath": "#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "level": 2
        },
        {
          "label": "打开链接",
          "fragment": "%E6%89%93%E5%BC%80%E9%93%BE%E6%8E%A5",
          "fullPath": "#%E6%89%93%E5%BC%80%E9%93%BE%E6%8E%A5",
          "level": 2
        },
        {
          "label": "点击卡片的行为",
          "fragment": "%E7%82%B9%E5%87%BB%E5%8D%A1%E7%89%87%E7%9A%84%E8%A1%8C%E4%B8%BA",
          "fullPath": "#%E7%82%B9%E5%87%BB%E5%8D%A1%E7%89%87%E7%9A%84%E8%A1%8C%E4%B8%BA",
          "level": 2
        },
        {
          "label": "属性表",
          "fragment": "%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "fullPath": "#%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});
