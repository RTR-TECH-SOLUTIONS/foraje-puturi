# Foraje Puțuri București-Ilfov: demo site de prezentare

Lead: formular Facebook „Site de prezentare de la 500 lei”, 8 noiembrie 2026. Datele lead-ului sunt în `_client-media/lead.md` (doar local).
Cerința: „să mă găsească oamenii pe Google”; are deja un site care nu-i aduce clienți (linkul nu l-a trimis).
Research-ul de piață e în `PLAN-DEMO.md`.

```
npm install
npm run dev      # http://localhost:4321/foraje-puturi/
npm run build    # dist/ static
```

## Versiunea 2: „între Aura Foraje și forajesiputuri.ro”

Prima variantă (structura a 7 site-uri într-un look inventat: bej + maro, Archivo, schemă SVG) a fost respinsă ca
„foarte AI”. Mario a cerut ceva între **auraforaje-denisipari.ro** și **forajesiputuri.ro**. Valorile de mai jos sunt
măsurate pe cele două site-uri (8 noiembrie 2026); nimic nu e inventat în afara lor.

| Secțiune | Luat de la | Ce anume |
|---|---|---|
| Font | Aura | Poppins peste tot |
| Header | Aura | alb, logo stânga (pictogramă + „FORAJE PUȚURI” pe două culori + rând mic), meniu, telefon în buton verde pastilă |
| Logo | Aura (tipul de lockup) | 3 variante pe `/logo` (turlă de foraj, picătură, doar text); se schimbă din `site.logoVariant` |
| Hero | Aura | poză pe toată lățimea cu voal închis, rând italic deasupra, H1 alb, buton verde „Ofertă gratuită · telefon” |
| Al doilea buton din hero | N&C | WhatsApp lângă butonul de telefon |
| Cadrul din dreapta hero-ului | N&C (poza cu legendă) | clipul clientului, 9:16, pornește fără sunet, buton „Cu sunet”, re-encodat la 720p |
| Bara de sub hero | N&C | căsuța „Sună pentru ofertă gratuită” cu programul + 3 cifre |
| Cine suntem noi | Aura | text în stânga, imagine în dreapta |
| Poze din șantier | N&C | rând glisant, legenda pe poză, fundal #f4f6fb |
| Serviciile noastre | Aura | „01.”–„06.” mari negre, titlu + text, poză în dreapta, linii între rânduri |
| Preț foraje puțuri, fără surprize | N&C | 3 carduri pe adâncimi, radius 20, cel din mijloc evidențiat „Cel mai cerut”, notă „De ce variază prețul?” |
| Cum lucrăm, în 5 pași | N&C | 5 carduri pe un rând, numerotate 01–05 |
| Zone | N&C | bandă bleumarin #15296b cu București / Ilfov / județe |
| Întrebări frecvente | Aura | casete cu chenar, +/– în stânga, prima deschisă, primele întrebări sunt despre preț |
| Contact | N&C | date de contact în stânga, formular în card în dreapta (trimite pe WhatsApp) |
| Footer | Aura | linkuri „Foraje puțuri [zonă]” / „Denisipări puțuri [zonă]” + „Date de contact” |
| WhatsApp flotant | ambele | buton rotund verde, dreapta jos |

Abateri voite:
- verdele Aurei (#0bce42) e închis la #088a2d, pentru contrast AA cu text alb;
- nu am preluat de la N&C etichetele mono uppercase („LUCRARI REALIZATE”), gradientul portocaliu din hero, emoji-ul 🏆;
- nu am preluat de la Aura „Cele mai mici prețuri din piață” (pus în loc „Fără avans, plătiți după ce curge apa”).

## Ce e real și ce e provizoriu

**Real (din materialul clientului):** clipul de 0:28 (`public/video/denisipare.*`) și cadrele decupate din el
(`src/assets/client/`), telefonul 0729 782 533 (afiș + clipuri), serviciile și zonele (listarea firmei pe
bucuresti365.ro), Sector 1. Originalul clipului stă în `_client-media/` (nu intră în build).

**Provizoriu, de confirmat cu clientul** (totul în `src/data/site.ts`):
- numele firmei („Foraje Puțuri / București · Ilfov”) și logo-ul cu inițiale „FP”;
- numărul de WhatsApp (acum 0729 782 533; lead-ul a scris de pe alt număr, vezi `_client-media/lead.md`);
- programul (L–D 07:00–20:00);
- cifrele de sub hero (24 luni garanție, 0 lei avans) și rândul „Fără avans…”;
- **toate prețurile** din carduri și din FAQ (orientative, după piață: 140 / 160 lei pe ml cu tub, denisipare de la 500 lei).

**Poze Pexels provizorii** (`src/assets/foto/`): foraj-utilaj-curte (hero; logo-ul firmei de pe utilaj e estompat),
cap-put-gradina, foraj-sol, echipa-utilaj, fantana, piloni, pompa-irigatii. De cerut de la client: utilajul lui,
echipa la lucru, puțuri terminate cu localitatea, apa înainte și după denisipare.

## Mock (`TODO(real)`)
- Formularul deschide WhatsApp cu mesajul completat. La proiectul real, opțional: o copie pe e-mail prin Resend.
- Linkurile din footer („Foraje puțuri Ilfov” etc.) duc la secțiunea de zone; la proiectul real devin pagini.
- `noindex` în `Layout.astro` și `robots.txt` cu `Disallow: /`: se scot la proiectul real.

## Pași la proiectul real
0. În `astro.config.mjs`: domeniul clientului în `site`, se șterge `base`; se scoate `noindex` și se refac `robots.txt`.
1. Conținut final: nume, prețuri, garanție, program, poze reale.
2. **SEO local (scopul clientului):** research de keyworduri RO („foraje puturi pret”, „foraje puturi ilfov”,
   „denisipari puturi”, „foraje puturi bucuresti” + localitățile din Ilfov); pagini pe servicii și pe zone (din
   linkurile din footer, ca la Aura și euroforaj.ro); JSON-LD `LocalBusiness`; sitemap.
3. **Profilul Google Business** + recenzii: pe „foraje puturi” harta cu 3 firme apare deasupra rezultatelor organice.
4. Pachet legal (cookie, Termeni, Confidențialitate) + credit „made by RTR” în footer.
5. Domeniu + găzduire Hostinger (static).
