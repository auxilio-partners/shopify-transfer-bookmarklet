# Shopify Print Transfer Bookmarklet

Use this bookmarklet to print Shopify transfer orders with product images.

## Installing the bookmarklet

Show your browser's Boomkarks Bar, and then drag the link below to the bar to
add the bookmark.

<a href="javascript:(()=>{const e=document.querySelector('table.Polaris-DataTable__Table thead tr'),l=e.firstChild.cloneNode(!1);l.textContent='Image',e.prepend(l);const t=document.querySelector('table.Polaris-DataTable__Table tfoot tr'),a=t.firstChild.cloneNode(!1);t.prepend(a);let o=document.querySelectorAll('[class^=\'_Thumbnail\']');document.querySelectorAll('.Polaris-DataTable__TableRow').forEach(((e,l)=>{const t=e.firstChild.cloneNode(!1),a=o[l].cloneNode(!0);a.setAttribute('class',''),a.querySelector('span.Polaris-Thumbnail').classList.replace('Polaris-Thumbnail--sizeSmall','Polaris-Thumbnail--sizeLarge'),t.appendChild(a),e.prepend(t)})),window.print()})();" class="button">Print Transfer Order</a>

## Updating the bookmarklet

To update to the latest version, delete the existing bookmark, and install the
bookmark from this page again.

<style>
    .button {
        display: inline-block;
        font: 1.5em sans-serif;
        text-decoration: none;
        color: white;
        background-color: rebeccapurple;
        padding: 2pt 8pt;
        border: 1px solid silver;
        border-radius: 3px;
    }
    .button:hover {
        color: inherit;
        text-decoration: none;
    }
</style>
