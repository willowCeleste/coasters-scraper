const search = `<!DOCTYPE html><html lang="en"><head><meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no, viewport-fit=cover"><title>Amusement Park Search Results</title><meta name="description" content="Looking for statistics on the fastest, tallest or longest roller coasters?  Find it all and much more with the interactive Roller Coaster Database."><meta name="application-name" content="rcdb"><style>
:root {--left: 0px;}
:root {--right: 0px;}
:root {--pleft: env(safe-area-inset-left);}
:root {--pright: env(safe-area-inset-right);}
:root {--ptop: env(safe-area-inset-top);}
:root {--pbottom: env(safe-area-inset-bottom);}
@media all and (min-width: 1281px)
{
	:root {--left: calc((100% - 1280px) / 2);}
	:root {--right: calc((100% - 1280px) / 2);}
	:root {--pleft: 0px;}
	:root {--pright: 0px;}
}:root {--body-back: #fff;}
:root {--body-text: #000;}
:root {--title-text: #000;}
:root {--link-link: #0000ee;}
:root {--link-visited: #551a8b;}
:root {--menu-back: #303231;}
:root {--menu-text: #e0e0e0;}
:root {--menu-hov: #505050;}
:root {--menu-line: #505050;}
:root {--head-text: #000;}
:root {--bg-color: rgba(239,138,8,0.8);}
:root {--shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);}
:root {--tbl-head: #000;}
:root {--tbl-body: #c0c0c0;}
:root {--tbl-hov: rgba(0,0,0,0.06);}
:root {--bg-image: url(60.svg);}
:root {--img-camera: url(17.svg);}
:root {--img-tree-open: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjZTBlMGUwIiBkPSJNNTEyLDc1IDUxMiw0MzcgMTUwLDQzN3oiLz48L3N2Zz4=");}
:root {--img-tree-clos: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNlMGUwZTAiIGQ9Ik0yNTYsMCA1MTIsMjU2IDI1Niw1MTJ6TTMwNiwxMjAuNzEgNDQxLjI5LDI1NiAzMDYsMzkwLjI5eiIvPjwvc3ZnPg==");}
:root {--img-swap: url(/50.svg);}

:root {--ctrl-back: #fff;}
:root {--ctrl-back-rev: #141d26;}
:root {--ctrl-text-rev: #aab8c2;}
:root {--ctrl-bdr: 1px solid var(--bg-color);}

:root {--img-sort-not: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAgMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAsNWgxMGwtNSwtNXpNMCw3aDEwbC01LDV6IiBmaWxsPSIjY2NjIi8+PC9zdmc+");}
:root {--img-sort-asc: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAgMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAsNWgxMGwtNSwtNXoiLz48cGF0aCBkPSJNMCw3aDEwbC01LDV6IiBmaWxsPSIjY2NjIi8+PC9zdmc+");}
:root {--img-sort-dec: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAgMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAsNWgxMGwtNSwtNXoiIGZpbGw9IiNjY2MiLz48cGF0aCBkPSJNMCw3aDEwbC01LDV6Ii8+PC9zdmc+");}

:root {--img-close: url("data:image/svg+xml;base64,Cjxzdmcgdmlld0JveD0iMCAwIDUxMiA1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGcgZmlsbD0ic2lsdmVyIj4KICAgIDxwYXRoIGQ9Ik01MCwwTDAsNTBMNDYyLDUxMkw1MTIsNDYyWiIvPgogICAgPHBhdGggZD0iTTUwLDUxMkwwLDQ2Mkw0NjIsMEw1MTIsNTBaIi8+CiAgPC9nPgo8L3N2Zz4=");}
.shade {overflow-y: auto;}@media all and (max-width: 1280px)
{
	#pbox {display: none;}
}

html {-webkit-text-size-adjust: 100%;}
body {background-color: var(--body-back); color: var(--body-text);}
body {line-height: 1.4;}
body {margin: 0 var(--right) 0 var(--left); padding: var(--ptop) calc(var(--pright) + 6px) var(--pbottom) calc(var(--pleft) + 6px);}
body, select, input, textarea {font-size: 16px; font-family: Arial, Helvetica, sans-serif;}

.locsel, select, input, textarea {background-color: var(--ctrl-back); color: var(--body-text); border: var(--ctrl-bdr); box-sizing: border-box; padding: 3px 6px;}
select:not([multiple]), input, textarea {-webkit-appearance: none; -moz-appearance: none; appearance: none;}
.locsel, select, input:not([type=radio]), textarea {border-radius: 6px;}
input[type=radio]:checked {background-image: url(data:image/svg+xml;base64,PHN2ZyAgdmlld0JveD0iMCAwIDggOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGZpbGw9IiM5OGE5YjYiIGN4PSI0IiBjeT0iNCIgcj0iMiIvPjwvc3ZnPg==);}
input[type=radio], input[type='checkbox'] {height: 22px; width: 22px;}
input[type=radio] {position: relative; top: -4px; border-radius: 11px; margin-right: 6px;}
input[type=checkbox] {margin: 2px 6px 2px 0; vertical-align: bottom;}
input[type=checkbox]:checked {background-image: url(data:image/svg+xml;base64,PHN2ZyAgdmlld0JveD0iLTEwIC0xMCA1MS4zIDUxLjMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iIzk4YTliNiIgZD0iTTguNCAxNS43bC03LTcuMWMtMi0yLTEuOS01LjIuMy03LjIgMi4xLTEuOSA1LjUtMS44IDcuNS4ybDYuNSA2LjYgNi41LTYuNmMyLTIgNS40LTIuMiA3LjUtLjIgMi4xIDEuOSAyLjMgNS4xLjMgNy4ybC03IDcuMSA3IDcuMWMyIDIgMS45IDUuMi0uMyA3LjItMi4xIDEuOS01LjUgMS44LTcuNS0uM2wtNi41LTYuNi02LjUgNi42Yy0yIDItNS40IDIuMi03LjUuMy0yLjEtMS45LTIuMy01LjEtLjMtNy4ybDctNy4xeiIvPjwvc3ZnPg==);}
.locsel, select:not([multiple]) {padding-right: 26px; background-repeat: no-repeat; background-position: right 0; background-image: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSItMTAwIC0xMDAgNzEyIDcxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjOThhOWI2IiBkPSJNNTA0IDI1NmMwIDEzNy0xMTEgMjQ4LTI0OCAyNDhTOCAzOTMgOCAyNTYgMTE5IDggMjU2IDhzMjQ4IDExMSAyNDggMjQ4em0tMTQzLjYtMjguOUwyODggMzAyLjZWMTIwYzAtMTMuMy0xMC43LTI0LTI0LTI0aC0xNmMtMTMuMyAwLTI0IDEwLjctMjQgMjR2MTgyLjZsLTcyLjQtNzUuNWMtOS4zLTkuNy0yNC44LTkuOS0zNC4zLS40bC0xMC45IDExYy05LjQgOS40LTkuNCAyNC42IDAgMzMuOUwyMzkgNDA0LjNjOS40IDkuNCAyNC42IDkuNCAzMy45IDBsMTMyLjctMTMyLjdjOS40LTkuNCA5LjQtMjQuNiAwLTMzLjlsLTEwLjktMTFjLTkuNS05LjUtMjUtOS4zLTM0LjMuNHoiLz48L3N2Zz4=);}
.locsel:focus, select:focus, textarea:focus, input:focus {box-shadow: 0 0 0 1px var(--bg-color); outline: none;}

.locsel {display: inline-block;}
.locsel:link {color: var(--body-text);}
.locsel:hover {text-decoration: none;}

.pop {color: var(--menu-text); background: var(--menu-back); box-shadow: var(--shadow); padding: 6px;}
.pop input,
.pop select,
.pop textarea {background-color: var(--ctrl-back-rev); color: var(--ctrl-text-rev);}

ul.ll.inline {display: inline;}
ul.ll {margin: .75em 0; padding: 0;}
ul.ll li {display: inline;}
ul.ll li:not(:first-child):before {content: '\2022'; margin: 0 6px;}

.bold {font-weight: bold;}

a {text-decoration: none;}
a:link {color: var(--link-link);}
a:visited {color: var(--link-visited);}
a:hover {text-decoration: underline;}
/*a:focus {outline: thin dotted;}*/

form {margin: 0px;}

h1 {margin: 6px 0 12px 0; padding: 0; font-size: 1.5em; font-weight: bold; color: var(--title-text);}
h2 {margin: 0; padding: 0; font-size: 1.25em; font-weight: bold;}:root {--menu-w: 32px;}
:root {--look-w: 32px;}
:root {--home-w: 92px;}
:root {--find-w: 32px;}
:root {--sign-w: 32px;}
:root {--margin: calc((100% - var(--menu-w) - var(--look-w) - var(--home-w) - var(--find-w) - var(--sign-w)) / 8);}

#menu {width: var(--menu-w);}
#look {width: var(--look-w);}
#home {width: var(--home-w); background-image: url(61.svg);}
#find {width: var(--find-w);}
#sign {width: var(--sign-w);}

:root {--head-height: 32px;}
:root {--head-padding: 6px;}

:root {--head-total: calc(var(--head-height) + var(--head-padding) * 2);}

.svg {background-size: contain; background-repeat: no-repeat; background-position: center;}
.nav {position: fixed; left: var(--left); right: var(--right); box-shadow: var(--shadow);}

#menudrop {left: calc(var(--left) + var(--pleft)); white-space: nowrap;}
#signdrop {right: calc(var(--right) + var(--pright));}

#head {top: 0; height: var(--head-height); overflow: hidden; white-space: nowrap;}
#head {background: var(--bg-color); padding: var(--head-padding) calc(var(--pright) + 6px) var(--head-padding) calc(var(--pleft) + 6px);}
#head a {display: inline-block; height: 32px;}
#head a:not(:first-child) {margin-left: var(--margin);}
#head a:not(:last-child) {margin-right: var(--margin);}

#bg {position: fixed; z-index: -1; left: 0; right: 0; top: var(--head-total); bottom: 0;}
#bg {background-image: var(--bg-image);}

#spacer {height: var(--head-total);}

#mask {position: fixed; display: none; top: var(--head-total); bottom: 0; left: 0; right: 0;}

@media all and (max-width: 640px)
{
	.shade > div > h2 {font-size: 22px;}

	.shade {width: 100%;}
					
	.mg a {padding: 6px 12px; font-size: 20px;}

	#signdrop form > * {padding: 9px;}
	.pref > * {padding: 9px 0;}

	#signdrop, 
	#signdrop select,
	#signdrop input {font-size: 22px;}

	#signdrop input[type='checkbox'] {height: 30px; width: 30px; margin: 0 12px 0 0;}
}

@media all and (min-width: 641px)
{
	.shade > div > h2 {font-size: 17px;}

	/*Not sure what wide did*/
	/*.wide {width: calc(50% + 32px); left: 50%; transform: translate(-50%, 0);}*/

	.mg a {padding: 3px 12px; font-size: 17px;}
					
	#signdrop form > * {padding: 6px;}
	.pref > * {padding: 6px 0;}

	#signdrop input[type='checkbox'] {margin: 0 6px 0 0;}
}

.shade > div > h2 {margin: 0; padding: 6px 0 6px 0; font-variant: small-caps;}
.shade > div > h2 {margin: 0; padding: 6px 0;}

#sqsr:empty {display: none;}
#lookdrop div {padding: 0 0 12px 0; font-size: 16px; border: 0;}
#lookdrop div:not(:first-child) {padding-top: 6px; border-top: 1px solid var(--menu-line);}
#lookdrop div:not(:last-child) {padding-bottom: 6px;}
#lookdrop div > a {display: block; text-decoration: none; padding: 3px;}
#lookdrop div > a:hover {background-color: var(--menu-hov);}
#lookdrop div > a > span {display: block;}

#signdrop input[type=text],
#signdrop input[type=password] {width: 100%; min-width: 215px;}
#signdrop label span,
.pref span {display: inline-block; padding-bottom: 1px;}
.pref {padding-left: 6px;}

#signdrop input,
#signdrop select {background-color: var(--ctrl-back-rev); color: var(--ctrl-text-rev);}

.shade {position: fixed; background: var(--menu-back); height: 0px; max-height: calc(100% - var(--head-total)); color: var(--menu-text);}
.shade {transition: height 0s ease;}

.mg a:hover {background-color: var(--menu-hov);}
.mg a {display: block; text-decoration: none;}

.shade a:link,
.shade a:visited,
.shade a:active {color: var(--menu-text);}

.shade {padding: 0 12px; box-sizing: border-box;}
.shade > div {padding: 6px 0;}
.shade > div:not(:first-child) {border-top: 1px solid var(--menu-line);}
.shade > div:not(:last-child) {border-bottom: 1px solid var(--menu-line);}
.shade > div > h2 {font-variant: small-caps;}

.shade {box-shadow: var(--shadow);}

/*#signdrop input[type=submit] {background-color: var(--bg-color); color: black; -webkit-appearance: none;}*/

#www {position: relative;}
#fpw {height: 16px; position: absolute; right: 6px; top: 0; bottom: 0; margin: auto; text-decoration: none;}
/*#fpw:hover {text-decoration: underline;}*/

#head {-webkit-tap-highlight-color: rgba(0,0,0,0);}

@media all and (max-width: 639px)
{
	#lookdrop {width: 100%; left: 0;}
	#qsf {width: calc(100% - 12px - 12px - 12px - 12px - 32px - 32px); left: calc(32px + 12px + 12px);}
	#qsf input {font-size: 22px; margin: 0px 16px;}
}

@media all and (min-width: 640px)
{
	#lookdrop {width: calc(50% - (var(--left) + var(--right)) / 2 + 48px); left: 50%; transform: translate(-50%, 0);}
	#qsf {width: calc(50% + 64px); left: 50%; transform: translate(-50%, 0);}
	#qsf input {font-size: 16px; margin: 4px 16px;}
}

#lookdrop > div {padding: 6px 0;}
#lookdrop div:last-child {font-size: 12px;}

#qs:focus {box-shadow: none;}

#qsf {display: none; position: absolute; top: 6px; height: calc(32px - 6px);}
#qsf {background-color: #141d26; border-radius: 16px;}
#qsf {padding: 3px 0px;}

#qsf input {box-sizing: border-box; width: calc(100% - 32px - 16px); -webkit-appearance: none;}
#qsf input {padding: 0;}
#qsf input {border: none;}
#qsf input:focus {outline: none;}
#qsf input::-ms-clear {display: none;}
#qsf input {background-color: transparent; color: #aab8c2;}

#qsc {display: none; width: 32px; height: 32px; position: absolute; right: 0; top: 0; cursor: pointer;}:root {--height: 6px;}
#menu.head {position: relative;}
#menu.head * {margin: 0; position: absolute; background-color: black; border-radius: calc(var(--height) / 2);}

#menu.head :nth-child(1) {top: 0; height: var(--height);}
#menu.head :nth-child(3) {top: calc(50% - var(--height) / 2); bottom: calc(50% - var(--height) / 2);}
#menu.head :nth-child(5) {bottom: 0; height: var(--height);}
#menu.head :nth-child(odd) {left: 0; right: 0;}

#menu.head :nth-child(2) {transform: rotate(45deg);}
#menu.head :nth-child(4) {transform: rotate(-45deg);}
#menu.head :nth-child(even) {top: calc(50% - var(--height) / 2); bottom: calc(50% - var(--height) / 2);}
#menu.head :nth-child(even) {left: calc(50% - var(--height) / 2); right: calc(50% - var(--height) / 2);}

@keyframes squishdown
{
	from {top: 0;}
	to {top: calc(50% - var(--height) / 2);}
}

@keyframes squishdownx
{
	from {top: calc(50% - var(--height) / 2);}
	to {top: 0;}
}

@keyframes squishup
{
	from {bottom: 0;}
	to {bottom: calc(50% - var(--height) / 2);}
}

@keyframes squishupx
{
	from {bottom: calc(50% - var(--height) / 2);}
	to {bottom: 0;}
}
			
@keyframes shrink
{
	from {left: 0; right: 0;}
	to {left: calc(50% - var(--height) / 2); right: calc(50% - var(--height) / 2);}
}

@keyframes shrinkx
{
	from {left: calc(50% - var(--height) / 2); right: calc(50% - var(--height) / 2);}
	to {left: 0; right: 0;}
}

@keyframes grow
{
	from {left: calc(50% - var(--height) / 2); right: calc(50% - var(--height) / 2);}
	to {left: calc(50% - (100% * 1.414) / 2 + var(--height) / 2); right: calc(50% - (100% * 1.414) / 2 + var(--height) / 2);}
}

@keyframes growx
{
	from {left: calc(50% - (100% * 1.414) / 2 + var(--height) / 2); right: calc(50% - (100% * 1.414) / 2 + var(--height) / 2);}
	to {left: calc(50% - var(--height) / 2); right: calc(50% - var(--height) / 2);}
}

#menu.head.gox :nth-child(1) {animation: squishdown 100ms linear forwards, shrink 100ms linear 100ms forwards;}
#menu.head.gox :nth-child(3) {animation: shrink 100ms linear 100ms forwards;}
#menu.head.gox :nth-child(5) {animation: squishup 100ms linear forwards, shrink 100ms linear 100ms forwards;}
#menu.head.gox :nth-child(even) {animation: grow 100ms linear 200ms forwards}

#menu.head.goh :nth-child(1) {top: calc(50% - var(--height) / 2);}
#menu.head.goh :nth-child(5) {bottom: calc(50% - var(--height) / 2);}
#menu.head.goh :nth-child(odd) {left: calc(50% - var(--height) / 2); right: calc(50% - var(--height) / 2);}
#menu.head.goh :nth-child(even) {left: calc(50% - (100% * 1.414) / 2 + var(--height) / 2); right: calc(50% - (100% * 1.414) / 2 + var(--height) / 2);}

#menu.head.goh :nth-child(even) {animation: growx 100ms linear forwards;}
#menu.head.goh :nth-child(5) {animation: shrinkx 100ms linear 100ms forwards, squishupx 100ms linear 200ms forwards;}
#menu.head.goh :nth-child(3) {animation: shrinkx 100ms linear 100ms forwards;}
#menu.head.goh :nth-child(1) {animation: shrinkx 100ms linear 100ms forwards, squishdownx 100ms linear 200ms forwards;}h1 {display: inline-block;}
.right {float: right; margin-top: 6px;}

.list :not(:last-child):after {content: ', ';}

#rfoot {text-align: center; padding: 6px;}
#rfoot a,
#rfoot span {margin: 0 6px; font-weight: bold;}

.t-list tr td:first-child {text-align: right; white-space: nowrap; color: var(--title-text);}
.t-top tr td {vertical-align: top;}

.lcam {width: 19px; height: 14px; background-image: var(--img-camera); background-repeat: no-repeat; background-size: contain; background-position: center center;}

.rer {margin-top: 12px;}.stdtbl {overflow-x: auto; -webkit-overflow-scrolling: touch; white-space: nowrap;}
.stdtbl table {width: 100%; border-spacing: 0; line-height: 2em;}
.stdtbl table th,
.stdtbl table td {padding: 0px 6px;}
.stdtbl table th,
.stdtbl table th a:link,
.stdtbl table th a:visited {color: var(--title-text);}
.stdtbl table thead tr:first-child th {border-top: 1px solid var(--tbl-head);}
.stdtbl table thead tr:last-child th {border-bottom: 1px solid var(--tbl-head);}
.stdtbl table tbody tr:not(:last-child) td {border-bottom: 1px solid var(--tbl-body);}
.stdtbl table tbody tr:last-child td {border-bottom: 1px solid var(--tbl-head);}
.stdtbl table tbody tr:hover {background: var(--tbl-hov);}

.stdtbl th[data-sort]:hover {background-color: var(--tbl-hov);}

@media all and (min-width: 640px)
{
	.stdtbl tr[data-dsort] th:not(:last-child) {border-right: 1px solid var(--tbl-body);}
	.stdtbl th[data-sort] {background-repeat: no-repeat; background-size: auto 50%; background-position: right 6px center; padding-right: 24px;}

	.stdtbl th[data-sort] {background-image: var(--img-sort-not);}
	.stdtbl th[data-sort].asc {background-image: var(--img-sort-asc);}
	.stdtbl th[data-sort].dec {background-image: var(--img-sort-dec);}
}</style>
<style>.rer th:nth-child(1) span,.rer td:nth-child(1) a {display: inline-block;}.rer th:nth-child(1),.rer td:nth-child(1) {text-align: center; width: 19px;}.rer th:nth-child(2) {text-align: left;}.rer td:nth-child(2) {white-space: normal;}.rer th:nth-child(3) {text-align: left;}.rer td:nth-child(3) {white-space: normal;}.rer th:nth-child(4) {text-align: left;}.rer th:nth-child(5) {text-align: right;}.rer td:nth-child(5) {text-align: right;}.rer th:nth-child(6) {text-align: right;}.rer td:nth-child(6) {text-align: right;}.rer th:nth-child(7) {text-align: right;}.rer td:nth-child(7) {text-align: right;}</style><script>
function initHeader(){function open(node){function step3(){nodeShade.removeEventListener("transitionend",step3);if(nodeShade.style.overflowY=='hidden')nodeShade.style.overflowY='';nodeShade.style.height='auto';}function step2(){if(nodeShade.dataset.speed)nodeShade.style.transitionDuration=(height*parseFloat(nodeShade.dataset.speed)).toString()+'ms';nodeShade.style.opacity='';if(getComputedStyle(nodeShade,null).getPropertyValue("overflow-y")=='auto')nodeShade.style.overflowY='hidden';nodeShade.style.height=height.toString()+'px';if(height)nodeShade.addEventListener("transitionend",step3);else step3();}nodeMask.style.display='block';var nodeShade=document.getElementById(node.dataset.target);nodeShade.style.opacity=0;nodeShade.style.transitionDuration=0;nodeShade.style.height='auto';var height=nodeShade.getBoundingClientRect().height;nodeShade.style.height=0;window.requestAnimationFrame(step2);if(node.dataset.open)node.classList.add(node.dataset.open);if(node.dataset.close)node.classList.remove(node.dataset.close);if(node.dataset.aux)document.getElementById(node.dataset.aux).style.display='block';if(node.dataset.focus)document.getElementById(node.dataset.focus).focus();nodeOpen=node;}function close(node){function step4(){nodeShade.removeEventListener("transitionend",step4);if(nodeOpen==null)nodeMask.style.display='';if(nodeShade.style.overflowY=='hidden')nodeShade.style.overflowY='';}function step3(){nodeShade.style.height='';if(height)nodeShade.addEventListener("transitionend",step4);else step4();}function step2(){if(nodeShade.dataset.speed)nodeShade.style.transitionDuration=(height*parseFloat(nodeShade.dataset.speed)).toString()+'ms';nodeShade.style.height=height.toString()+'px';requestAnimationFrame(step3);}var nodeShade=document.getElementById(node.dataset.target);var height=nodeShade.getBoundingClientRect().height;nodeShade.style.transitionDuration=0;if(getComputedStyle(nodeShade,null).getPropertyValue("overflow-y")=='auto')nodeShade.style.overflowY='hidden';requestAnimationFrame(step2);if(nodeOpen.dataset.open)nodeOpen.classList.remove(nodeOpen.dataset.open);if(nodeOpen.dataset.close)nodeOpen.classList.add(nodeOpen.dataset.close);if(node.dataset.aux)document.getElementById(node.dataset.aux).style.display='';nodeOpen=null;}function click(e){var nodeClosed=null;var nodeShade;var anchor=e.target;while(anchor)if(anchor.tagName=='A')break;else anchor=anchor.parentNode;if(anchor){if(anchor.dataset.hold==undefined)anchor.blur();if(anchor.href==location.href+'#')e.preventDefault();if(nodeOpen){if(anchor==nodeOpen){close(nodeOpen);}else{if(anchor.dataset.hold==undefined)close(nodeOpen);if(anchor.dataset.target)open(anchor);}}else if(anchor.dataset.target)open(anchor);}else if(nodeOpen){nodeShade=document.getElementById(nodeOpen.dataset.target);if(!nodeShade.contains(e.target))close(nodeOpen);}}function clear(){while(nodeLookDrop.hasChildNodes())nodeLookDrop.removeChild(nodeLookDrop.lastChild);}function qs(e){queryCount++;nodeQSC.style.display=e.target.value.length?'block':'';if(e.target.value.length){var xhr=new XMLHttpRequest();var formData=new FormData();var dateStart=new Date();formData.append('q',e.target.value.toLowerCase());formData.append('s',queryCount);formData.append('w',window.innerWidth);formData.append('h',window.innerHeight);formData.append('r',devicePixelRatio);xhr.onload=function(){if(this.status==200){querySuccess++;var d=(new Date()).getTime()-dateStart.getTime();if(d>querySlow)querySlow=d;if(d<queryFast)queryFast=d;querySum+=d;var json=JSON.parse(this.response);if(json.sequence==queryCount){clear();if(json.results.length)nodeLookDrop.appendChild(document.createElement('div'));for(var n=0;n<json.results.length;n++){nodeLookDrop.lastChild.appendChild(document.createElement('a'));nodeLookDrop.lastChild.lastChild.href=json.results[n].l;nodeLookDrop.lastChild.lastChild.appendChild(document.createElement('span'));nodeLookDrop.lastChild.lastChild.lastChild.appendChild(document.createTextNode(json.results[n].t));if(json.results[n].s){nodeLookDrop.lastChild.lastChild.appendChild(document.createElement('span'));nodeLookDrop.lastChild.lastChild.lastChild.style.fontSize='75%';nodeLookDrop.lastChild.lastChild.lastChild.style.marginLeft='20px';nodeLookDrop.lastChild.lastChild.lastChild.appendChild(document.createTextNode(json.results[n].s));}}nodeLookDrop.appendChild(document.createElement('div'));}if(nodeLookDrop.hasChildNodes())nodeLookDrop.lastChild.textContent='Slowest: '+querySlow+' ms; Fastest: '+queryFast+' ms; Average: '+Math.round(querySum/(queryCount-queryNull))+' ms; '+querySuccess+' of '+(queryCount-queryNull);}else{alert(this.status);}};xhr.open('POST','/iqs.json');xhr.send(formData);}else{queryNull++;clear();}}function sp(e){e.stopPropagation();}function qsc(e){clear();nodeQSC.style.display='';nodeQSF.firstChild.value='';nodeQSF.firstChild.focus();}function ldmd(e){nodeQSF.firstChild.blur();}var nodeOpen=null;var nodeHead=document.getElementById('head');var nodeMask=document.getElementById('mask');var nodeQS=document.getElementById('qs');var nodeQSF=document.getElementById('qsf');var nodeLookDrop=document.getElementById('lookdrop');var nodeQSC=document.getElementById('qsc');var queryCount=0;var querySuccess=0;var queryNull=0;var querySum=0;var querySlow=0;var queryFast=60000;nodeQSF.addEventListener('click',sp);nodeHead.addEventListener('click',click);nodeMask.addEventListener('click',click);nodeQS.addEventListener('input',qs);nodeQSC.addEventListener('click',qsc);nodeLookDrop.addEventListener('touchstart',ldmd,{passive:true});nodeQS.setAttribute('autocorrect','off');function prefInput(e){var xhr=new XMLHttpRequest();var formData=new FormData();formData.append(e.target.dataset.name,e.target.value);xhr.onload=function(){if(this.status==200){location.reload(true);}};xhr.open('POST','/cookie.json');xhr.send(formData);}for(let pref of document.getElementsByClassName('pref'))pref.addEventListener('change',prefInput);for(let col of document.getElementsByClassName('cca')){var l=0;for(var m=0;m<col.childNodes.length;m++)l=Math.max(l,col.childNodes[m].offsetWidth);}function keyed(e){if(document.activeElement.tagName=='BODY'&&e.key.length==1&&!e.ctrlKey&&!e.altKey&&!e.metaKey){var event=new MouseEvent('click',{view:window,bubbles:true,cancelable:true});document.getElementById('look').dispatchEvent(event);}else if(e.key=='Escape'&&nodeOpen!=null)close(nodeOpen);}document.addEventListener("keydown",keyed);}document.addEventListener('DOMContentLoaded',initHeader);function shortDate(dt){switch(dt.length){case 4:return(new Date(dt.substr(0,4),0,1,12)).toLocaleDateString(navigator.languages,{year:'numeric'});case 7:return(new Date(dt.substr(0,4),dt.substr(5,2)-1,1,12)).toLocaleDateString(navigator.languages,{year:'numeric',month:'numeric'});case 10:return(new Date(dt.substr(0,4),dt.substr(5,2)-1,dt.substr(8,2),12)).toLocaleDateString(navigator.languages,{year:'numeric',month:'numeric',day:'numeric'});case 24:return(new Date(dt)).toLocaleDateString(navigator.languages,{year:'numeric',month:'numeric',day:'numeric'});default:return'';}}function dateTime(dt){return(new Date(dt)).toLocaleDateString(navigator.languages,{year:'numeric',month:'long',day:'numeric',hour:'numeric',minute:'numeric'});}function intlInit(){let ts=document.getElementsByTagName('time');for(let t=0;t<ts.length;t++){if(ts[t].hasAttribute('data-long'))ts[t].appendChild(document.createTextNode(dateTime(ts[t].getAttribute('datetime'))));else ts[t].appendChild(document.createTextNode(shortDate(ts[t].getAttribute('datetime'))));}for(let e of document.getElementsByClassName('int'))e.textContent=Intl.NumberFormat(navigator.languages).format(parseInt(e.textContent));for(let t of document.getElementsByClassName('float')){var o={};var p=t.dataset.prc?parseFloat(t.dataset.prc):1;o.minimumFractionDigits=p;o.maximumFractionDigits=p;t.textContent=Intl.NumberFormat(navigator.languages,o).format(parseFloat(t.textContent));}for(let t of document.getElementsByClassName('percent')){var o={};var p=t.dataset.prc?parseFloat(t.dataset.prc):1;o.style='percent';o.minimumFractionDigits=p;o.maximumFractionDigits=p;t.textContent=Intl.NumberFormat(navigator.languages,o).format(parseFloat(t.textContent));}for(let t of document.getElementsByClassName('currency')){var o={};var p=t.dataset.prc?parseFloat(t.dataset.prc):0;o.style='currency';o.currency=t.dataset.ccy;o.minimumFractionDigits=p;o.maximumFractionDigits=p;t.textContent=Intl.NumberFormat(navigator.languages,o).format(parseFloat(t.textContent));}for(let e of document.getElementsByClassName('sort'))if(e.tagName=='UL')[...e.children].sort((a,b)=>a.dataset.sort==b.dataset.sort?a.firstChild.firstChild.nodeValue.localeCompare(b.firstChild.firstChild.nodeValue,navigator.languages):parseInt(a.dataset.sort)-parseInt(b.dataset.sort)).map(node=>e.appendChild(node));else if(e.tagName=='SELECT')[...e.querySelectorAll(":not([value=''])")].sort((a,b)=>a.dataset.sort==b.dataset.sort?a.firstChild.nodeValue.localeCompare(b.firstChild.nodeValue,navigator.languages):parseInt(a.dataset.sort)-parseInt(b.dataset.sort)).map(node=>e.appendChild(node));}window.addEventListener('DOMContentLoaded',intlInit);function initReport(){function click(e){if(e.target.dataset.id!==undefined){e.preventDefault();var xhr=new XMLHttpRequest();var formData=new FormData();formData.append('id',e.target.dataset.id);xhr.onload=function(){if(this.status==200)pictureViewer(JSON.parse(this.response),0,false);};xhr.open('POST','/op.json');xhr.send(formData);}}for(let t of document.querySelectorAll('.rer > table > tbody'))t.addEventListener('click',click);}window.addEventListener('DOMContentLoaded',initReport);function pictureViewer(data,nOffset,historyHash=true){var nIconSize=24;var nMargin=6;var nFontSize=18;var nGridMargin=2;var nSwipeNoise=5;var nSwipeDistance=50;var nSwipeDuration=250;var nSleepDuration=3000;var nAnimeIncrement=20;var nAnimeDuration=200;var nAnimeMinDuration=100;var nDoubleTapSpeed=375;var nPictureGap=25;var nSpriteCols=parseInt(data.cols);var nSpriteSize=parseInt(data.width);var urlSprite=data.sprite_url;function picture(){let nodeBox,nodeOverlay,nodeHeader,nodeTitle,nodeControls;let nodeGridIcon,nodeCloseIcon,nodeCopyright;var nodeObj=[],nObjX=[],nObjY=[];var bTapMode=false;var bSwipeMode=false;var bZoomMode=false;var bAnimating=false;var bHeadFoot=true;var bSwipeXLock;var nTouch1ID,nTouch1OriginX,nTouch1OriginY;var nTouch2ID,nTouch2OriginX,nTouch2OriginY;var tTouch1Start;var tTap;var tMovement;function toPx(n){return Math.round(n).toString()+'px';}function shiftOffset(direction){return(nOffset+direction+data.pictures.length)%data.pictures.length;}function addDiv(n){nodeObj[n]=nodeBox.appendChild(document.createElement('div'));nodeObj[n].style.position='fixed';nodeObj[n].style.zIndex=5;nodeObj[n].style.backgroundSize='cover';nodeObj[n].style.backgroundColor='silver';}function removeDiv(n){nodeBox.removeChild(nodeObj[n]);}function pictureChange(direction){bAnimating=true;for(var n=0;n<3;n++)nObjX[n]=parseInt(nodeObj[n].style.left);var nTravel=nObjX[1+direction]-Math.round((window.innerWidth-parseInt(nodeObj[1+direction].style.width))/2);var nElapsed=0;var nNetDuration=nAnimeDuration*Math.abs(nTravel)/window.innerWidth+nAnimeMinDuration;var nMove;var animateScroll=function(){nElapsed+=nAnimeIncrement;var t=nElapsed/(nNetDuration/2);nMove=t<1?nTravel/2*t*t:-nTravel/2*(t*t-4*t+2);for(var n=0;n<3;n++)nodeObj[n].style.left=toPx(nObjX[n]-nMove);if(nElapsed<nNetDuration)setTimeout(animateScroll,nAnimeIncrement);else{if(direction){removeDiv(1-direction);nodeObj[1-direction]=nodeObj[1];nodeObj[1]=nodeObj[1+direction];addDiv(1+direction);nOffset=shiftOffset(direction);}pictureDemo();bAnimating=false;}};animateScroll();}function pictureMoveY(direction,callback1,callback2){bAnimating=true;var nTravel;if(direction)nTravel=window.innerHeight*-direction+parseInt(nodeObj[1].style.top)-nObjY[1];else nTravel=nObjY[1]-Math.round((window.innerHeight-parseInt(nodeObj[1].style.height))/2);for(var n=0;n<3;n++)nObjY[n]=parseInt(nodeObj[n].style.top);var nElapsed=0;var nNetDuration=nAnimeDuration*Math.abs(nTravel)/window.innerHeight+nAnimeMinDuration;var nMove;var animateScroll=function(){nElapsed+=nAnimeIncrement;var t=nElapsed/(nNetDuration/2);nMove=t<1?nTravel/2*t*t:-nTravel/2*(t*t-4*t+2);nodeObj[1].style.top=toPx(nObjY[1]-nMove);if(nElapsed<nNetDuration)setTimeout(animateScroll,nAnimeIncrement);else{bAnimating=false;resizePicture();if(callback1)callback1();if(callback2)setTimeout(callback2);}};animateScroll();}function pictureDemo(){if(historyHash)history.replaceState(null,'',window.location.pathname+'#p='+data.pictures[nOffset].id);resizePicture();nodeTitle.firstChild.nodeValue=(nOffset+1).toString()+' / '+data.pictures.length.toString()+' '+data.pictures[nOffset].name;nodeCopyright.href=data.pictures[nOffset].copy_id+'.htm';nodeCopyright.firstChild.nodeValue=data.copyright+' '+shortDate(data.pictures[nOffset].copy_date)+' '+data.pictures[nOffset].copy_name;}function close(){clearTimeout(tMovement);window.removeEventListener('touchstart',preventDefault,{passive:false});window.removeEventListener('touchmove',preventDefault,{passive:false});window.removeEventListener('touchend',preventDefault,{passive:false});window.removeEventListener('touchcancel',preventDefault,{passive:false});window.removeEventListener('resize',resizePicture);nodeBox.parentNode.removeChild(nodeBox);if(historyHash)history.replaceState(null,'',window.location.pathname);}function start(id,x,y){if(!bAnimating&&!bSwipeMode){if(bZoomMode){if(nTouch1ID==undefined){nTouch1ID=id;nTouch1OriginX=x;nTouch1OriginY=y;}else if(nTouch2ID==undefined){nTouch2ID=id;nTouch2OriginX=x;nTouch2OriginY=y;}}else if(bTapMode){bZoomMode=true;bTapMode=false;nTouch2ID=id;nTouch2OriginX=x;nTouch2OriginY=y;}else{bTapMode=true;nTouch1ID=id;nTouch1OriginX=x;nTouch1OriginY=y;tTouch1Start=new Date().getTime();}}}function move(id,x,y){if(id==nTouch1ID){if(bTapMode){if(Math.abs(nTouch1OriginX-x)>nSwipeNoise||Math.abs(nTouch1OriginY-y)>nSwipeNoise){bTapMode=false;bSwipeMode=true;bSwipeXLock=Math.abs(x-nTouch1OriginX)>=Math.abs(y-nTouch1OriginY);move(id,x,y);}}else if(bSwipeMode){if(bSwipeXLock)for(var n=0;n<3;n++)nodeObj[n].style.left=toPx(nObjX[n]+x-nTouch1OriginX);else nodeObj[1].style.top=toPx(nObjY[1]+y-nTouch1OriginY);}else if(bZoomMode){}}else if(id==nTouch2ID){if(bZoomMode){}}}function end(id,x,y){if(id==nTouch1ID){if(bSwipeMode){var nDeltaX=Math.abs(x-nTouch1OriginX);var nDeltaY=Math.abs(y-nTouch1OriginY);var tDuration=new Date().getTime()-tTouch1Start;if(bSwipeXLock)if(nDeltaX>nSwipeDistance)if(tDuration<nSwipeDuration||nDeltaX>window.innerWidth/2)if(x>nTouch1OriginX)pictureChange(-1);else pictureChange(+1);else pictureChange(0);else pictureChange(0);else if(nDeltaY>nSwipeDistance)if(tDuration<nSwipeDuration||nDeltaY>window.innerHeight/2)if(y<nTouch1OriginY)pictureMoveY(-1,close);else pictureMoveY(+1,close,grid);else pictureMoveY(0);else pictureMoveY(0);bSwipeMode=false;}else if(bZoomMode){nTouch1ID=undefined;if(nTouch2ID==undefined)bZoomMode=false;}else if(bTapMode){bTapMode=false;if(tTap==undefined)tTap=setTimeout(singleTap,nDoubleTapSpeed);else{clearTimeout(tTap);tTap=undefined;}}}else if(id==nTouch2ID){nTouch2ID=undefined;if(nTouch1ID==undefined)bZoomMode=false;}}function singleTap(){clearTimeout(tTap);tTap=undefined;bHeadFoot=!bHeadFoot;nodeOverlay.style.display=bHeadFoot?'block':'none';}function cancel(id,x,y){bTapMode=false;bSwipeMode=false;bZoomMode=false;nTouch1ID=undefined;nTouch2ID=undefined;pictureChange(0);}function removeInits(){nodeBox.removeEventListener('touchstart',touchInit);nodeBox.removeEventListener('pointerdown',pointerInit);nodeBox.removeEventListener('mousemove',mouseInit);nodeBox.removeEventListener('click',clickInit);nodeBox.removeEventListener('keydown',keydownInit);}function keydown(e){if(!bAnimating){switch(e.keyCode){case 37:pictureChange(-1);break;case 39:pictureChange(+1);break;case 27:case 40:close();break;case 38:close();gridOpen();break;}}e.stopPropagation();}function keydownInit(e){removeInits();keydown(e);nodeBox.addEventListener('keydown',keydown);}function click(e){if(!bAnimating)if(e.clientX<e.currentTarget.getBoundingClientRect().width/2)pictureChange(-1);else pictureChange(+1);}function clickInit(e){removeInits();click(e);nodeBox.addEventListener('mousemove',mouseMove);nodeBox.addEventListener('click',click);nodeBox.addEventListener('keydown',keydown);}function mouseMove(e){nodeOverlay.style.opacity=1;clearTimeout(tMovement);tMovement=setTimeout(()=>{nodeOverlay.style.opacity=0;},nSleepDuration);}function mouseInit(e){removeInits();mouseMove(e);nodeBox.addEventListener('mousemove',mouseMove);nodeBox.addEventListener('click',click);nodeBox.addEventListener('keydown',keydown);}function pointer(e,func){if(e.pointerType=='touch'){func(e.pointerId,Math.floor(e.pageX),Math.floor(e.pageY));}}function pointerInit(e){if(e.pointerType=='touch'){removeInits();nodeBox.tabIndex=null;nodeBox.blur();pointer(e,start);nodeBox.addEventListener('pointerdown',e=>{pointer(e,start);});nodeBox.addEventListener('pointermove',e=>{pointer(e,move);});nodeBox.addEventListener('pointerup',e=>{pointer(e,end);});nodeBox.addEventListener('pointercancel',e=>{pointer(e,cancel);});}}function touch(e,func){for(let ct of e.changedTouches)func(ct.identifier,ct.pageX,ct.pageY);}function preventDefault(e){e.preventDefault();}function touchInit(e){removeInits();nodeBox.tabIndex=null;nodeBox.blur();touch(e,start);window.addEventListener('touchstart',preventDefault,{passive:false});window.addEventListener('touchmove',preventDefault,{passive:false});window.addEventListener('touchend',preventDefault,{passive:false});window.addEventListener('touchcancel',preventDefault,{passive:false});nodeBox.addEventListener('touchstart',e=>{touch(e,start);});nodeBox.addEventListener('touchmove',e=>{touch(e,move);});nodeBox.addEventListener('touchend',e=>{touch(e,end);});nodeBox.addEventListener('touchcancel',e=>{touch(e,cancel);});}function resizePicture(){var nWidth,nHeight;var nW,nH;var strURL;var nodeStyle;var fRatio;for(var n=-1;n<=1;n++){let picture=data.pictures[shiftOffset(n)];fRatio=picture.width/picture.height;nWidth=picture.width;nHeight=picture.height;strURL=picture.url;for(x=0;x<data.sizes.length;x++){if(nWidth>nHeight){nW=parseInt(data.sizes[x].width);nH=parseInt(data.sizes[x].height);}else{nW=parseInt(data.sizes[x].height);nH=parseInt(data.sizes[x].width);}if(fRatio<nW/nH)nW=Math.round(nH*fRatio);else nH=Math.round(nW/fRatio);if(nW>=nWidth||nH>=nHeight)break;else if(nW>window.innerWidth||nH>window.innerHeight){nWidth=nW;nHeight=nH;strURL=strURL.substr(0,strURL.length-1)+String.fromCharCode(98+x);break;}}if(nWidth>window.innerWidth){nHeight*=window.innerWidth/nWidth;nWidth=window.innerWidth;}if(nHeight>window.innerHeight){nWidth*=window.innerHeight/nHeight;nHeight=window.innerHeight;}nodeStyle=nodeObj[n+1].style;nObjX[n+1]=(window.innerWidth-nWidth)/2+(window.innerWidth+nPictureGap)*n;nObjY[n+1]=(window.innerHeight-nHeight)/2;nodeStyle.left=toPx(nObjX[n+1]);nodeStyle.top=toPx(nObjY[n+1]);nodeStyle.width=toPx(nWidth);nodeStyle.height=toPx(nHeight);if(n!=0)nodeStyle.backgroundImage='none';nodeStyle.backgroundImage='url(\''+strURL+'\')';}}function cantTouchThis(node){node.addEventListener('touchstart',e=>{e.stopPropagation();});node.addEventListener('touchmove',e=>{e.stopPropagation();});node.addEventListener('touchend',e=>{e.stopPropagation();});node.addEventListener('touchcancel',e=>{e.stopPropagation();});node.addEventListener('mousemove',e=>{e.stopPropagation();});node.addEventListener('click',e=>{e.stopPropagation();});}nodeBox=document.body.appendChild(document.createElement('div'));nodeBox.style.position='fixed';nodeBox.style.backgroundColor='black';nodeBox.style.left='0';nodeBox.style.right='0';nodeBox.style.top='0';nodeBox.style.bottom='0';nodeBox.style.outline='none';nodeOverlay=nodeBox.appendChild(document.createElement('div'));nodeOverlay.style.display='block';nodeOverlay.style.color='silver';nodeOverlay.style.fontSize=nFontSize.toString()+'px';nodeOverlay.style.opacity=1;nodeOverlay.style.transition='opacity .5s ease-in-out';nodeHeader=nodeOverlay.appendChild(document.createElement('div'));nodeHeader.style.position='fixed';nodeHeader.style.left='0';nodeHeader.style.right='0';nodeHeader.style.top='0';nodeHeader.style.height=(nIconSize+nMargin*2).toString()+'px';nodeHeader.style.padding=nMargin.toString()+'px';nodeHeader.style.backgroundColor='rgba(0, 0, 0, 0.4)';nodeHeader.style.zIndex='6';nodeHeader.style.whiteSpace='nowrap';nodeTitle=nodeHeader.appendChild(document.createElement('div'));nodeTitle.style.display='inline-block';nodeTitle.style.margin=nMargin.toString()+'px';nodeTitle.style.whiteSpace='nowrap';nodeTitle.style.verticalAlign='bottom';nodeTitle.style.overflowX='hidden';nodeTitle.appendChild(document.createTextNode('\u00A0'));nodeControls=nodeHeader.appendChild(document.createElement('div'));nodeControls.style.display='inline-block';nodeControls.style.position='absolute';nodeControls.style.right=nMargin.toString()+'px';nodeControls.style.fontSize='0';nodeGridIcon=nodeControls.appendChild(document.createElement('a'));cantTouchThis(nodeGridIcon);nodeGridIcon.addEventListener('click',e=>{close();setTimeout(grid);});nodeGridIcon.href='#';nodeGridIcon.style.display='inline-block';nodeGridIcon.style.width=nIconSize.toString()+'px';nodeGridIcon.style.height=nIconSize.toString()+'px';nodeGridIcon.style.margin=nMargin.toString()+'px';nodeGridIcon.style.backgroundImage='url(\'38.svg\')';nodeCloseIcon=nodeControls.appendChild(document.createElement('a'));cantTouchThis(nodeCloseIcon);nodeCloseIcon.addEventListener('click',e=>{close();e.preventDefault();});nodeCloseIcon.href='#';nodeCloseIcon.style.display='inline-block';nodeCloseIcon.style.width=nIconSize.toString()+'px';nodeCloseIcon.style.height=nIconSize.toString()+'px';nodeCloseIcon.style.margin=nMargin.toString()+'px';nodeCloseIcon.style.backgroundImage='url(\'39.svg\')';var nodeFooter=nodeOverlay.appendChild(document.createElement('div'));nodeFooter.style.position='fixed';nodeFooter.style.left='0';nodeFooter.style.right='0';nodeFooter.style.bottom='0';nodeFooter.style.height=(nIconSize+nMargin*2).toString()+'px';nodeFooter.style.padding=nMargin.toString()+'px';nodeFooter.style.backgroundColor='rgba(0, 0, 0, 0.4)';nodeFooter.style.zIndex='6';nodeCopyright=nodeFooter.appendChild(document.createElement('a'));cantTouchThis(nodeCopyright);nodeCopyright.appendChild(document.createTextNode('\u00A0'));nodeCopyright.style.height=nIconSize.toString()+'px';nodeCopyright.style.display='table-cell';nodeCopyright.style.color=nodeOverlay.style.color;nodeCopyright.style.whiteSpace='nowrap';nodeCopyright.style.verticalAlign='bottom';for(var n=0;n<3;n++){addDiv(n);nodeObj[n].style.display='none';}for(var x=0;x<3;x++){nodeObj[x].style.display='block';nodeObj[x].style.zIndex=5;}pictureDemo();nodeBox.style.touchAction='none';nodeBox.addEventListener('touchstart',touchInit);nodeBox.addEventListener('pointerdown',pointerInit);nodeBox.addEventListener('mousemove',mouseInit);nodeBox.addEventListener('click',clickInit);nodeBox.tabIndex=0;nodeBox.focus();nodeBox.addEventListener('keydown',keydownInit);nodeBox.addEventListener('selectstart',e=>{e.preventDefault();});window.addEventListener('resize',resizePicture);}function grid(){let nodeBox;let nodeGrid;let nodeCloseIcon;function resize(){var nWidth;var nHeight;var nNetSpriteSize=nSpriteSize+nGridMargin*2;var nHeaderHeight=nIconSize+nMargin*2+nMargin*2;var nNetInnerHeight=window.innerHeight-nHeaderHeight;var nCols=Math.ceil(Math.sqrt(data.pictures.length*window.innerWidth/window.innerHeight));if(nCols*nNetSpriteSize>window.innerWidth)nCols=Math.floor((window.innerWidth)/nNetSpriteSize);var nRows=Math.ceil(data.pictures.length/nCols);if(nRows*nNetSpriteSize>nNetInnerHeight){nWidth=nCols*nNetSpriteSize;nHeight=nNetInnerHeight;nodeGrid.style.overflowY='scroll';nodeGrid.style.overflowX='hidden';}else{nWidth=nCols*nNetSpriteSize;nHeight=nRows*nNetSpriteSize;nodeGrid.style.overflowY='hidden';nodeGrid.style.overflowX='hidden';}nodeGrid.style.width=nWidth.toString()+'px';nodeGrid.style.height=nHeight.toString()+'px';nodeGrid.style.left=Math.round((window.innerWidth-nWidth)/2).toString()+'px';nodeGrid.style.top=Math.round((nNetInnerHeight-nHeight)/2+nHeaderHeight).toString()+'px';}function close(e){window.removeEventListener('resize',resize);nodeBox.parentNode.removeChild(nodeBox);if(historyHash)history.replaceState(null,'',window.location.pathname);}function keydown(e){switch(e.keyCode){case 27:close();break;}}function click(e){if(e.target.dataset.offset){nOffset=parseInt(e.target.dataset.offset);close();setTimeout(picture);}}nodeBox=document.body.appendChild(document.createElement('div'));nodeBox.style.position='fixed';nodeBox.style.backgroundColor='black';nodeBox.style.left='0';nodeBox.style.right='0';nodeBox.style.top='0';nodeBox.style.bottom='0';nodeBox.style.outline='none';nodeCloseIcon=nodeBox.appendChild(document.createElement('a'));nodeCloseIcon.addEventListener('click',e=>{close();e.preventDefault();});nodeCloseIcon.href='#';nodeCloseIcon.style.display='inline-block';nodeCloseIcon.style.position='absolute';nodeCloseIcon.style.top=nMargin.toString()+'px';nodeCloseIcon.style.right=nMargin.toString()+'px';nodeCloseIcon.style.width=nIconSize.toString()+'px';nodeCloseIcon.style.height=nIconSize.toString()+'px';nodeCloseIcon.style.margin=nMargin.toString()+'px';nodeCloseIcon.style.backgroundImage='url(\'39.svg\')';nodeGrid=nodeBox.appendChild(document.createElement('div'));nodeGrid.style.position='fixed';nodeGrid.style.WebkitOverflowScrolling='touch';nodeGrid.style.overflowY='scroll';nodeGrid.style.fontSize=0;for(var n=0;n<data.pictures.length;n++){var nodeNew=nodeGrid.appendChild(document.createElement('div'));nodeNew.style.display='inline-block';nodeNew.style.margin=(nGridMargin*2).toString()+'px '+nGridMargin.toString()+'px 0 '+nGridMargin.toString()+'px';nodeNew.style.width=nSpriteSize.toString()+'px';nodeNew.style.height=nSpriteSize.toString()+'px';var nSpriteOffset=parseInt(data.pictures[n].offset);nodeNew.style.backgroundPosition=(nSpriteOffset%nSpriteCols*-nSpriteSize).toString()+'px '+(Math.floor(nSpriteOffset/nSpriteCols)*-nSpriteSize).toString()+'px';nodeNew.style.backgroundImage='url(\''+urlSprite+'\')';nodeNew.style.cursor='pointer';nodeNew.dataset.offset=n;}resize();nodeBox.tabIndex=0;nodeBox.focus();nodeBox.addEventListener('keydown',keydown);nodeGrid.addEventListener('click',click);window.addEventListener('resize',resize);if(historyHash)history.replaceState(null,'',window.location.pathname+'#p=0');}if(nOffset>=0&&nOffset<data.pictures.length)picture();else grid();}function initBackground(){var colImages=document.getElementsByClassName('bkg');for(var n=0;n<colImages.length;n++){if(colImages[n].dataset.width&&colImages[n].dataset.height){colImages[n].style.width=colImages[n].dataset.width+'px';colImages[n].style.height=colImages[n].dataset.height+'px';}else if(colImages[n].dataset.ratio&&colImages[n].dataset.width){colImages[n].style.width=colImages[n].dataset.width+'px';colImages[n].style.height=Math.ceil(parseFloat(parseInt(colImages[n].dataset.width)/colImages[n].dataset.ratio)).toString()+'px';}else if(colImages[n].dataset.ratio&&colImages[n].dataset.height){colImages[n].style.width=Math.ceil(parseFloat(parseInt(colImages[n].dataset.height)*colImages[n].dataset.ratio)).toString()+'px';colImages[n].style.height=colImages[n].dataset.height+'px';}colImages[n].style.backgroundImage='url("'+colImages[n].dataset.background+'")';colImages[n].style.backgroundRepeat='no-repeat';colImages[n].style.backgroundSize='contain';colImages[n].style.backgroundPosition='center';}}window.addEventListener('load',initBackground);</script>
</head>
<body><div id="spacer"></div><section><div><h1> Search Results</h1><span class="right"><a href="/os.htm?ot=3&amp;ol=1&amp;df">Modify Report</a><br></span><table class="t-list t-top"><tbody><tr><td>Criteria:</td><td>Defunct<br>Location = <a href="/location.htm?id=1">North America</a><br>Amusement Parks<br></td></tr><tr><td>Found:</td><td><span class="int">797</span> (Page 1 of 34)</td></tr><tr><td>Sorted By:</td><td>Amusement Park<br></td></tr></tbody></table></div><div class="stdtbl rer"><table><thead><tr><th><a href="/r.htm?order=0&amp;ot=3&amp;ol=1&amp;df"><span class="lcam" aria-label="Camera Icon"></span></a></th><th><a href="/r.htm?order=-1&amp;ot=3&amp;ol=1&amp;df">Amusement Park</a></th><th><a href="/r.htm?order=3&amp;ot=3&amp;ol=1&amp;df">Location</a></th><th><a href="/r.htm?order=10&amp;ot=3&amp;ol=1&amp;df">Status</a></th><th><a href="/r.htm?order=8&amp;ot=3&amp;ol=1&amp;df">Opened</a></th><th><a href="/r.htm?order=28&amp;ot=3&amp;ol=1&amp;df">Roller Coasters</a></th><th><a href="/r.htm?order=9&amp;ot=3&amp;ol=1&amp;df">Closed</a></th></tr>
</thead><tbody><tr><td>&nbsp;</td><td><a href="/15643.htm">12th Street Amusement</a></td><td><a href="/location.htm?id=16227">Brooklyn</a>, <a href="/location.htm?id=14869">New York</a>, <a href="/location.htm?id=59">United States</a></td><td>-</td><td>≤ <time datetime="1921"></time></td><td>-</td><td><time datetime="2017"></time></td></tr><tr><td>&nbsp;</td><td><a href="/19274.htm">1982 World's Fair</a></td><td><a href="/location.htm?id=21582">Knoxville</a>, <a href="/location.htm?id=21087">Tennessee</a>, <a href="/location.htm?id=59">United States</a></td><td>-</td><td><time datetime="1982-05-01"></time></td><td>-</td><td><time datetime="1982-10-31"></time></td></tr><tr><td>&nbsp;</td><td><a href="/10622.htm">Acushnet Park</a></td><td><a href="/location.htm?id=10168">New Bedford</a>, <a href="/location.htm?id=9766">Massachusetts</a>, <a href="/location.htm?id=59">United States</a></td><td>-</td><td><time datetime="1916"></time></td><td>-</td><td><time datetime="1938"></time></td></tr><tr><td>&nbsp;</td><td><a href="/5091.htm">Adventure Crossing</a></td><td><a href="/location.htm?id=4186">Augusta</a>, <a href="/location.htm?id=3647">Georgia</a>, <a href="/location.htm?id=59">United States</a></td><td>-</td><td><time datetime="1993"></time> - <time datetime="1999"></time></td><td>-</td><td><time datetime="2016-11-06"></time></td></tr><tr><td>&nbsp;</td><td><a href="/5369.htm">Adventure Land</a></td><td><a href="/location.htm?id=5581">Addison</a>, <a href="/location.htm?id=4513">Illinois</a>, <a href="/location.htm?id=59">United States</a></td><td>-</td><td><time datetime="1958"></time></td><td>-</td><td><time datetime="1977"></time></td></tr><tr><td>&nbsp;</td><td><a href="/5230.htm">Adventureland Amusement Park</a></td><td><a href="/location.htm?id=5814">North Webster</a>, <a href="/location.htm?id=5662">Indiana</a>, <a href="/location.htm?id=59">United States</a></td><td>-</td><td>-</td><td>-</td><td><time datetime="2001"></time></td></tr><tr><td><a class="lcam" href="#" aria-label="Camera Icon" data-id="16396"></a></td><td><a href="/16396.htm">Adventure Zone at Bear Lake</a></td><td><a href="/location.htm?id=22846">Garden City</a>, <a href="/location.htm?id=22826">Utah</a>, <a href="/location.htm?id=59">United States</a></td><td>-</td><td><time datetime="2018-06-16"></time></td><td>-</td><td><time datetime="2018"></time></td></tr><tr><td>&nbsp;</td><td><a href="/17805.htm">Ahern's Playland</a></td><td><a href="/location.htm?id=2972">Stratford</a>, <a href="/location.htm?id=2904">Connecticut</a>, <a href="/location.htm?id=59">United States</a></td><td>-</td><td><time datetime="1955-06-23"></time></td><td>-</td><td><time datetime="1971"></time> - <time datetime="1978"></time></td></tr><tr><td>&nbsp;</td><td><a href="/5874.htm">Airport Kiddieland</a></td><td><a href="/location.htm?id=16152">Binghamton</a>, <a href="/location.htm?id=14869">New York</a>, <a href="/location.htm?id=59">United States</a></td><td>-</td><td><time datetime="1956"></time></td><td>-</td><td>≥ <time datetime="1968"></time></td></tr><tr><td>&nbsp;</td><td><a href="/6351.htm">Airway Drive-in</a></td><td><a href="/location.htm?id=12142">Saint Ann</a>, <a href="/location.htm?id=12100">Missouri</a>, <a href="/location.htm?id=59">United States</a></td><td>-</td><td><time datetime="1940"></time>s</td><td>-</td><td><time datetime="1985"></time></td></tr><tr><td>&nbsp;</td><td><a href="/4767.htm">Alabama State Fairgrounds</a></td><td><a href="/location.htm?id=563">Birmingham</a>, <a href="/location.htm?id=60">Alabama</a>, <a href="/location.htm?id=59">United States</a></td><td>-</td><td>≤ <time datetime="1927"></time></td><td>-</td><td><time datetime="1986"></time></td></tr><tr><td>&nbsp;</td><td><a href="/10823.htm">Alameda Park</a></td><td><a href="/location.htm?id=57721">Butler</a>, <a href="/location.htm?id=18965">Pennsylvania</a>, <a href="/location.htm?id=59">United States</a></td><td>-</td><td><time datetime="1901-07-04"></time></td><td>-</td><td><time datetime="1941"></time> - <time datetime="1944"></time></td></tr><tr><td>&nbsp;</td><td><a href="/10598.htm">Alcyon Park</a></td><td><a href="/location.htm?id=14308">Pitman</a>, <a href="/location.htm?id=14116">New Jersey</a>, <a href="/location.htm?id=59">United States</a></td><td>-</td><td>≤ <time datetime="1903"></time></td><td>-</td><td><time datetime="1940"></time>s</td></tr><tr><td>&nbsp;</td><td><a href="/10742.htm">Al Fresco Amusement Park</a></td><td><a href="/location.htm?id=5511">Peoria Heights</a>, <a href="/location.htm?id=4513">Illinois</a>, <a href="/location.htm?id=59">United States</a></td><td>-</td><td><time datetime="1905-06-10"></time></td><td>-</td><td><time datetime="1944"></time></td></tr><tr><td>&nbsp;</td><td><a href="/4636.htm">American Adventures</a></td><td><a href="/location.htm?id=4207">Marietta</a>, <a href="/location.htm?id=3647">Georgia</a>, <a href="/location.htm?id=59">United States</a></td><td>-</td><td><time datetime="1990"></time></td><td>-</td><td><time datetime="2009"></time></td></tr><tr><td><a class="lcam" href="#" aria-label="Camera Icon" data-id="16108"></a></td><td><a href="/16108.htm">America's Fun Park</a></td><td><a href="/location.htm?id=12635">Branson</a>, <a href="/location.htm?id=12100">Missouri</a>, <a href="/location.htm?id=59">United States</a></td><td>-</td><td><time datetime="2018-06-08"></time></td><td>-</td><td><time datetime="2018-07-24"></time></td></tr><tr><td>&nbsp;</td><td><a href="/5288.htm">Angela Park</a></td><td><a href="/location.htm?id=20303">Drums</a>, <a href="/location.htm?id=18965">Pennsylvania</a>, <a href="/location.htm?id=59">United States</a></td><td>-</td><td><time datetime="1956"></time></td><td>-</td><td><time datetime="1988"></time></td></tr><tr><td>&nbsp;</td><td><a href="/6096.htm">Arcadas</a></td><td><a href="/location.htm?id=65409">Santo Domingo</a>, <a href="/location.htm?id=63343">Distrito Nacional</a>, <a href="/location.htm?id=56858">Dominican Republic</a></td><td>-</td><td><time datetime="1996"></time></td><td>-</td><td>≤ <time datetime="2007"></time></td></tr><tr><td>&nbsp;</td><td><a href="/18126.htm">Arcola Park</a></td><td><a href="/location.htm?id=57715">Rochelle Park</a>, <a href="/location.htm?id=14116">New Jersey</a>, <a href="/location.htm?id=59">United States</a></td><td>-</td><td><time datetime="1926"></time></td><td>-</td><td><time datetime="1929"></time></td></tr><tr><td>&nbsp;</td><td><a href="/15120.htm">Arlington Beach Park</a></td><td><a href="/location.htm?id=23974">Arlington</a>, <a href="/location.htm?id=23252">Virginia</a>, <a href="/location.htm?id=59">United States</a></td><td>-</td><td><time datetime="1923-05-30"></time></td><td>-</td><td><time datetime="1929"></time></td></tr><tr><td>&nbsp;</td><td><a href="/14622.htm">Bay Ridge Park</a></td><td><a href="/location.htm?id=9604">Annapolis</a>, <a href="/location.htm?id=9385">Maryland</a>, <a href="/location.htm?id=59">United States</a></td><td>-</td><td><time datetime="1880"></time></td><td>-</td><td><time datetime="1903"></time></td></tr><tr><td>&nbsp;</td><td><a href="/5679.htm">Bay Shore Park</a></td><td><a href="/location.htm?id=9594">Sparrows Point</a>, <a href="/location.htm?id=9385">Maryland</a>, <a href="/location.htm?id=59">United States</a></td><td>-</td><td><time datetime="1906"></time></td><td>-</td><td><time datetime="1947"></time></td></tr><tr><td>&nbsp;</td><td><a href="/5306.htm">Bayside Park</a></td><td><a href="/location.htm?id=6296">Clear Lake</a>, <a href="/location.htm?id=6261">Iowa</a>, <a href="/location.htm?id=59">United States</a></td><td>-</td><td>-</td><td>-</td><td>-</td></tr><tr><td>&nbsp;</td><td><a href="/17918.htm">Beach Amusement Park</a></td><td><a href="/location.htm?id=22623">Galveston</a>, <a href="/location.htm?id=21593">Texas</a>, <a href="/location.htm?id=59">United States</a></td><td>-</td><td>≤ <time datetime="1920"></time></td><td>-</td><td>≥ <time datetime="1950"></time></td></tr></tbody></table></div><div id="rfoot"><span>&lt;&lt;</span><span>1</span><a href="/r.htm?page=2&amp;ot=3&amp;ol=1&amp;df">2</a><a href="/r.htm?page=17&amp;ot=3&amp;ol=1&amp;df">17</a><a href="/r.htm?page=34&amp;ot=3&amp;ol=1&amp;df">34</a><a href="/r.htm?page=2&amp;ot=3&amp;ol=1&amp;df">&gt;&gt;</a></div></section><nav id="head" class="nav"><a href="#" id="menu" class="head" data-target="menudrop" data-open="gox" data-close="goh" aria-label="Menu"><p></p><p></p><p></p><p></p><p></p></a><a id="look" href="#" data-target="lookdrop" data-aux="qsf" data-focus="qs" aria-label="Search"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M.88,26.87a3,3 1 1 0 4.25,4.25l5.65,-5.65a13.8,13.8 0 1 0 -4.25,-4.25zM26,13.8a7.8,7.8 0 0 1 -15.6,0a7.8,7.8 0 0 1 15.6,0"></path></svg></a><form id="qsf" method="get" action="/qs.htm"><input id="qs" name="qs" type="text" placeholder="Search rcdb.com" autocapitalize="off" autocomplete="off" spellcheck="false"><svg id="qsc" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="16" fill="#999"></circle><path d="M25,25L39,39 M25,39L39,25" stroke="black" stroke-width="3" stroke-linecap="round"></path></svg></form><a id="home" href="/" class="svg" aria-label="Home"></a><a id="find" href="/lo.htm" aria-label="What's Nearby"><svg viewBox="0 0 2 2" xmlns="http://www.w3.org/2000/svg"><path d="M2 0L1 2L1 1L0 1Z"></path></svg></a><a id="sign" href="#" data-target="signdrop" aria-label="Preferences"><svg viewBox="0 0 360 360" xmlns="http://www.w3.org/2000/svg"><circle id="test" cx="180" cy="180" r="180" fill="#00FF00" fill-opacity="0"></circle><path d="m180,0 a180,180 0 0 0 0,360 180,180 0 0 0 0,-360Z M70,303 a165,165 0 1 1 220,0 110,110 0 1 0 -220,0z"></path><circle cx="180" cy="133" r="72"></circle></svg></a></nav><div id="mask"><div id="menudrop" class="shade scroll-y" data-speed=".5"><div class="mg"><h2>Reports</h2><a href="/r.htm?ot=2&amp;op=2022">New for 2022</a><a href="/r.htm?ot=2&amp;op=2021">New for 2021</a><a href="/r.htm?ot=2&amp;op=2020">New for 2020</a><a href="/census.htm">Census</a><a href="/rhr.htm">Record Holders</a><a href="/location.htm">World View</a><a href="/ib.htm">Inversions</a></div><div class="mg"><h2>Search</h2><a href="/os.htm?ot=2">Roller Coasters</a><a href="/os.htm?ot=3">Amusement Parks</a><a href="/os.htm?ot=12">Companies</a><a href="/os.htm?ot=13">People</a></div><div class="mg"><h2>More</h2><a href="/g.htm">Glossary</a><a href="/about.htm">About This Site</a><a href="/tou.htm">Terms Of Use</a><a href="/contact.htm">Contact Us</a></div></div><div id="lookdrop" class="shade scroll-y" data-speed=".5"></div><div id="signdrop" class="shade scroll-y" data-speed=".5"><div><h2>Sign On</h2><form><div><input id="user" type="text" placeholder="Username, email or phone"></div><div><input id="pass" type="password" placeholder="Password"></div><div><div><label><input type="checkbox" data-name="uom"><span>Stay signed on</span></label></div></div><div id="www"><input id="gogo" type="submit" value="Log In"><a id="fpw" href="#">Forgot password?</a></div></form></div><div><h2>Options</h2><div class="pref"><div><select data-name="lan"><option value="9">日本語</option><option selected="" value="">English</option><option value="2">Français</option><option value="3">Deutsch</option><option value="4">Español</option><option value="5">Nederlands</option><option value="6">Português</option><option value="7">Italiano</option><option value="8">Svenska</option><option value="10">中文</option></select></div><div><div><label><input type="checkbox" data-name="uom" value="2"><span>Metric</span></label></div></div><div><div><label><input type="checkbox" data-name="dm" value="1"><span>Dark Mode</span></label></div></div><div id="pbox"><div><label><input type="checkbox" data-name="npb" checked="" value="1"><span>Pillarbox</span></label></div></div></div></div></div></div><div id="bg" class="svg"></div></body></html>`

exports.search = search;