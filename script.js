const products=[
["Dewy Skin Tint","Makeup","Rp129.000","https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=85","NEW"],
["Cloud Cheek Blush","Makeup","Rp89.000","https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=700&q=85","BEST"],
["Soft Glow Palette","Makeup","Rp159.000","https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=700&q=85",""],
["Daily Skin Set","Skincare","Rp179.000","https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=700&q=85","NEW"],
["Gentle Face Wash","Skincare","Rp99.000","https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=700&q=85",""],
["Glow Serum","Skincare","Rp149.000","https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=700&q=85","BEST"],
["Silky Body Lotion","Bodycare","Rp89.000","https://images.unsplash.com/photo-1570194065650-d99fb4abbd04?auto=format&fit=crop&w=700&q=85",""],
["Sunday Shower Gel","Bodycare","Rp79.000","https://images.unsplash.com/photo-1607006483225-1b7c7b0d4d9b?auto=format&fit=crop&w=700&q=85",""],
["Glossy Hair Serum","Haircare","Rp109.000","https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=85","NEW"],
["Smooth Hair Mask","Haircare","Rp119.000","https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=700&q=85",""],
["Rosy Lip Oil","Lipcare","Rp79.000","https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=700&q=85","BEST"],
["Berry Lip Balm","Lipcare","Rp59.000","https://images.unsplash.com/photo-1631730486572-226d1a5e7a2a?auto=format&fit=crop&w=700&q=85",""]
];
let cat="All", cart=[];
function rupiah(x){return x}
function render(){
 const q=(document.getElementById("search").value||"").toLowerCase(), sort=document.getElementById("sort").value;
 let arr=products.filter(p=>(cat==="All"||p[1]===cat)&&p[0].toLowerCase().includes(q));
 if(sort==="low")arr.sort((a,b)=>parseInt(a[2].replace(/\D/g,''))-parseInt(b[2].replace(/\D/g,'')));
 if(sort==="high")arr.sort((a,b)=>parseInt(b[2].replace(/\D/g,''))-parseInt(a[2].replace(/\D/g,'')));
 document.getElementById("products").innerHTML=arr.map((p,i)=>`<article class="product"><div class="product-img"><img src="${p[3]}" alt="${p[0]}" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/700x700/f8e8ee/9c5870?text=Skin+%26+Things';"><span class="tag">${p[4]||p[1]}</span><button class="wish">♡</button></div><div class="brand">SKIN & THINGS</div><h3>${p[0]}</h3><div class="price">${p[2]}</div><button class="add" onclick='addCart(${JSON.stringify(p)})'>Add to bag</button></article>`).join("")||"<p>No beauty finds found.</p>";
}
function filterCat(c,el){cat=c;document.querySelectorAll(".chip").forEach(x=>x.classList.remove("active"));if(el)el.classList.add("active");else document.querySelectorAll(".chip").forEach(x=>{if(x.textContent===c)x.classList.add("active")});render();document.getElementById("shop").scrollIntoView({behavior:"smooth"})}
function focusSearch(){document.getElementById("search").focus();document.getElementById("shop").scrollIntoView({behavior:"smooth"})}
function addCart(p){cart.push(p);document.getElementById("cartCount").textContent=cart.length;updateCart();openCart()}
function updateCart(){let total=0;document.getElementById("cartItems").innerHTML=cart.map((p,i)=>{total+=parseInt(p[2].replace(/\D/g,''));return `<div class="cart-row"><span>${p[0]}</span><strong>${p[2]}</strong></div>`}).join("")||"<p>Your bag is empty.</p>";document.getElementById("total").textContent="Rp"+total.toLocaleString("id-ID");document.getElementById("checkout").href="https://wa.me/6285215059711?text="+encodeURIComponent("Hi Skin & Things! Aku mau order:\n"+cart.map(p=>"- "+p[0]+" ("+p[2]+")").join("\n"))}
function openCart(){document.getElementById("cart").classList.add("open");document.getElementById("overlay").classList.add("show")}
function closeCart(){document.getElementById("cart").classList.remove("open");document.getElementById("overlay").classList.remove("show")}
render();updateCart();