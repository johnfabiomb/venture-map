import{a as l,b,c}from"./chunk-ZJQBDGCB.js";var k=[{key:"{clientFirstName}",describe:"First name only \u2014 for the greeting"},{key:"{clientName}",describe:"Client or company name"},{key:"{invoiceNumber}",describe:"e.g. JFMB-2026-129"},{key:"{invoiceTitle}",describe:"What the invoice is for"},{key:"{total}",describe:"Invoice total"},{key:"{balance}",describe:"Still outstanding"},{key:"{amountPaid}",describe:"Already paid"},{key:"{issueDate}",describe:"Date issued"},{key:"{serviceDate}",describe:"When the work happened"},{key:"{dueDate}",describe:"Payment due date"},{key:"{daysOverdue}",describe:"Days past due (0 if not overdue)"},{key:"{paymentTerms}",describe:'e.g. "14 days"'},{key:"{invoiceLink}",describe:"Link to the live invoice page"},{key:"{businessName}",describe:"Your business name"}],y={subject:"Invoice {invoiceNumber} from {businessName}",body:`Hi {clientFirstName},

Thanks for your business. Your invoice {invoiceNumber} for {invoiceTitle} is attached as a PDF, and you can also view it online here:

{invoiceLink}

Total: {total}
Payment due: {dueDate}

Any questions, just reply to this email.

{businessName}`},v={subject:"Reminder: invoice {invoiceNumber} is due",body:`Hi {clientFirstName},

A quick reminder that invoice {invoiceNumber} for {invoiceTitle} has an outstanding balance of {balance}, which was due on {dueDate}.

{invoiceLink}

If you've already sent it, please ignore this \u2014 and thank you.

{businessName}`};function p(t){return t==="reminder"?v:y}function N(t,e){let s=u=>b(u,e.currency),a=(e.clientName??"").trim(),n={"{clientFirstName}":a?a.split(/\s+/)[0]:"there","{clientName}":a||"there","{invoiceNumber}":e.invoiceNumber??"","{invoiceTitle}":(e.invoiceTitle??"").trim()||"our work together","{total}":s(e.total),"{balance}":s(e.balance),"{amountPaid}":s(e.amountPaid),"{issueDate}":c(e.issueDate),"{serviceDate}":c(e.serviceDate),"{dueDate}":c(e.dueDate),"{daysOverdue}":String(Math.max(0,e.daysOverdue||0)),"{paymentTerms}":e.paymentTermsDays?`${e.paymentTermsDays} days`:"","{invoiceLink}":e.invoiceLink??"","{businessName}":e.businessName};return{subject:l(t.subject,n),body:l(t.body,n)}}function f(t,e,s,a){let n=encodeURIComponent,u=`mailto:${t.map(n).join(",")}`,d=r=>{let m=[`subject=${n(s)}`,`body=${n(r)}`];return e.length&&m.unshift(`cc=${e.map(n).join(",")}`),`${u}?${m.join("&")}`},o=d(a);if(o.length<=1900)return{url:o,truncated:!1};let i=a;for(;i.length>200&&d(i+`

\u2026`).length>1900;){let r=i.lastIndexOf(`

`);i=r>0?i.slice(0,r):i.slice(0,Math.floor(i.length*.8))}return o=d(i+`

\u2026`),{url:o,truncated:!0}}export{k as a,y as b,v as c,p as d,N as e,f};
