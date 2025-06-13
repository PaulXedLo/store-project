## 💗 Ce am invatat din acest proiect

Am reusit sa fac tranzitia foarte rapid de la Nuxt3 la Next.js. Pe parcurs, am realizat cat de superb este sa lucrezi cu o tehnologie atat de simpla de folosit si atat de eficienta in a crea o aplicatie scalabila. Pot spune ca m am indragostit cu adevarat de Next.js si o sa continui sa l folosesc si sa imi imbunatatesc toate abilitatile de dezvoltare web deoarece totul este un challenge!

Mi a placut mult sa lucrez organizat, sa gandesc fiecare pas si sa organizez aplicatia asa cum am stiut si cum am considerat ca va fi scalabil pe viitor. Tool urile moderne pe care le am folosit si best practice urile aplicate mi au aratat perspectiva unui developer "pe bune", si m au ajutat in sfarsit sa mi dezvolt orizontul si gandirea ca web developer.

Proiectul ma reprezinta ca stil de lucru si modul in care abordez proiectele, fie rau sau bine, incerc tot posibilul sa adaptez best practices, informandu ma de inainte de ele, si invatand pe parcurs!

## ❗ Decizii luate de mine in development ul acestei mini aplicatii CRUD.

## Next.js

Am decis sa folosesc Next.js deoarece ofera optimizari out of the box, viteza foarte rapida de dezvoltare. Un mare avantaj pe care l am gandit este server side rendering ul si scalabilitatea pe care o ofera, planuind ca pe viitor sa extind aplicatia in una full stack.

## Tailwind CSS

Am folosit tailwind deoarece este best practice si ofera o viteza extrem de rapida de dezvoltare cu utility classes, control complet asupra design ului fara sa fie nevoie de un fisier extern css.

## De ce am folosit Zustand?

Am ales Zustand pentru sintaxa simpla si similara cu Pinia(care imi este familiar din ecosistemul Vue).
Folosind acesta am reusit sa extrag logica mai complicata si sa evit sa complic prea mult componentele. Ma ajuta sa persist noile produse adaugate.

## De ce am ales Sonner

Cu ajutorul Sonner, am oferit feedback utilizatorului foarte simplu si modern.

## Animatii cu Framer Motion

Fara sa folosesc in exces, am decis sa adaug o experienta buna utilizatorului cu niste implementari simple.

## Validare form cu Zod + react-hook-form

Am ales Zod pentru familiaritate. Combinatia dintre cele 2 m au ajutat sa implementez feedback instant si validare. (Potential sa refolosesc pe backend).

## Structura pe care am ales o

Am organizat folderele din proiect pe functionalitate
'components/addproduct' - pentru adaugarea de produse
'components/myproducts' -pentru produsele adaugate
'components/products/productpage' toate componentele din pagina principala de produse
'components/ui'
'hooks/' - custom hook uri pentru a extrage logica din componente
'store' - Zustand pentru state management
'types/' - fisier extern pentru type safety

Motivul pentru care am ales abordarea asta este, separation of concerns, scalabilitate (planuiesc sa o transform in aplicatie full stack), cod usor de citit si de navigat prin el.

## Fakestore API

Am folosit API-ul pentru fetching de produse, pentru a imita o aplicatie reala. Am testat cu el filtrare, sortare, simulare simpla de paginare.
