# Shopify Print Transfer Bookmarklet

Use this bookmarklet to add product images to the Shopify Transfer Order page
when printing transfer orders.

## Installing the bookmarklet

Show your browser's Boomkarks Bar, and then drag this link to the bar to add the
bookmark.

<strong><a href="javascript:(()=>{const e=document.querySelector('table.Polaris-DataTable__Table thead tr'),l=e.firstChild.cloneNode(!1);l.textContent='Image',e.prepend(l);const t=document.querySelector('table.Polaris-DataTable__Table tfoot tr'),a=t.firstChild.cloneNode(!1);t.prepend(a);let o=document.querySelectorAll('[class^=\'_Thumbnail\']');document.querySelectorAll('.Polaris-DataTable__TableRow').forEach(((e,l)=>{const t=e.firstChild.cloneNode(!1),a=o[l].cloneNode(!0);a.setAttribute('class',''),a.querySelector('span.Polaris-Thumbnail').classList.replace('Polaris-Thumbnail--sizeSmall','Polaris-Thumbnail--sizeLarge'),t.appendChild(a),e.prepend(t)})),window.print()})();">Print Transfer Order</a></strong>

## Updating the bookmkarklet

To update to the latest version, delete the existing bookmark, and install the
bookmark from this page again.
