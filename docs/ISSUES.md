# Mektup – 8 Parçalık Geliştirme Planı

TypeScript + Tailwind CSS + Next.js ile yeniden yazım. **Vercel** ile deployment.

---

## İş akışı (zorunlu)

1. **Önce issue açılacak** → Projeye kod yazmadan ilgili parça için issue açılır.
2. **Branch açılacak** → Branch adı **evrensel commit türüne** uygun olacak (aşağıdaki tablo).
3. **Commit'ler tek tek atılacak** → Her parça bitince **Conventional Commits** formatında tek commit.
4. **Deployment** → Proje **Vercel** ile deploy edilecek.

### Evrensel commit türleri (Conventional Commits)

| Tür     | Kullanım                          | Örnek branch      | Örnek commit mesajı                    |
|--------|------------------------------------|-------------------|----------------------------------------|
| `feat` | Yeni özellik                       | `feat/letter-ui`  | `feat(letter): mektup overlay (#4)`    |
| `fix`  | Hata düzeltme                      | `fix/close-click` | `fix(overlay): dış tıklama (#6)`       |
| `chore`| Kurulum, config, bakım             | `chore/next-setup`| `chore: Next.js + Tailwind iskelet (#1)`|
| `docs` | Sadece dokümantasyon               | `docs/readme`     | `docs: README ve kurulum (#8)`          |
| `style`| Kod stili (format, CSS; davranış yok)| `style/animations`| `style: mektup animasyonları (#7)`     |
| `refactor` | Yeniden yapılandırma (özellik yok) | `refactor/components` | `refactor: bileşen ayrıştırma`   |

**Format:** `type(scope): kısa açıklama (#issue_no)`  
**Branch:** `type/kısa-açıklama` (kebab-case)

---

## Issue #1: Next.js + TypeScript + Tailwind proje iskeleti

- **Issue önce açılacak.** Sonra branch: `chore/next-tailwind-setup`
- [ ] Next.js (App Router) + TypeScript + Tailwind ile proje kurulumu
- [ ] Gereksiz Vite/React dosyalarının kaldırılması veya yeni yapıya geçiş
- [ ] `package.json`, `tsconfig.json`, `tailwind.config.ts` doğrulama

**Branch:** `chore/next-tailwind-setup`  
**Commit:** `chore: Next.js + TypeScript + Tailwind proje iskeleti (#1)`

---

## Issue #2: Ana sayfa ve layout

- **Issue aç → Branch:** `feat/main-layout`
- [ ] `app/layout.tsx` (metadata, font, body stilleri)
- [ ] `app/page.tsx` ana sayfa iskeleti
- [ ] Tailwind ile global stiller (arka plan, merkezleme)

**Branch:** `feat/main-layout`  
**Commit:** `feat(layout): ana sayfa ve layout (#2)`

---

## Issue #3: Zarf bileşeni ve görsel

- **Issue aç → Branch:** `feat/zarf-component`
- [ ] `components/Zarf.tsx` – zarf görseli, tıklanabilir
- [ ] `public/zarf.png` placeholder veya asset
- [ ] Ana sayfada Zarf kullanımı

**Branch:** `feat/zarf-component`  
**Commit:** `feat(zarf): zarf bileşeni ve görsel (#3)`

---

## Issue #4: Mektup overlay ve state

- **Issue aç → Branch:** `feat/letter-overlay`
- [ ] Mektup açık/kapalı state yönetimi (useState)
- [ ] `components/MektupOverlay.tsx` – overlay div, görünür/gizli
- [ ] Overlay'in merkeze hizalanması (Tailwind)

**Branch:** `feat/letter-overlay`  
**Commit:** `feat(letter): mektup overlay ve state (#4)`

---

## Issue #5: Mektup içeriği ve kapatma butonu

- **Issue aç → Branch:** `feat/letter-content`
- [ ] Mektup sayfa içeriği (beyaz kağıt, metin)
- [ ] Kapat (×) butonu, tıklanınca overlay kapanır
- [ ] Mevcut mektup metninin taşınması

**Branch:** `feat/letter-content`  
**Commit:** `feat(letter): mektup içeriği ve kapatma butonu (#5)`

---

## Issue #6: Overlay dışına tıklayınca kapatma

- **Issue aç → Branch:** `fix/overlay-outside-click`
- [ ] Overlay backdrop'a tıklanınca mektup kapanır
- [ ] Mektup kağıdına tıklanınca kapanmaz (event propagation)
- [ ] Erişilebilirlik (aria, keyboard)

**Branch:** `fix/overlay-outside-click`  
**Commit:** `fix(overlay): dış tıklama ile kapatma (#6)`

---

## Issue #7: Animasyonlar ve stil iyileştirmeleri

- **Issue aç → Branch:** `style/animations`
- [ ] Mektup açılış animasyonu (scale/fade)
- [ ] Overlay fade-in
- [ ] Tailwind transition/animation kullanımı
- [ ] Gölge, tipografi, renklerin gözden geçirilmesi

**Branch:** `style/animations`  
**Commit:** `style(letter): animasyonlar ve stil iyileştirmeleri (#7)`

---

## Issue #8: Son rötuşlar, dokümantasyon ve Vercel deployment

- **Issue aç → Branch:** `docs/readme-vercel`
- [ ] README.md (kurulum, çalıştırma, stack)
- [ ] Gerekirse `zarf.png` için not veya placeholder
- [ ] Build/lint kontrolü, gerekli düzeltmeler
- [ ] **Vercel ile deployment** (bağlantı, ortam değişkenleri varsa dokümante et)

**Branch:** `docs/readme-vercel`  
**Commit:** `docs: README, son rötuşlar ve Vercel deployment (#8)`
