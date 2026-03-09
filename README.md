# Mektup

Bu proje, ekranda bir **zarf** gösteren ve zarfın üzerine tıkladığınızda **mektup** (beyaz bir kağıt) açan küçük bir web uygulamasıdır. Mektupta kısa bir mesaj vardır; sağ üstteki **×** ile, dışarı tıklayarak veya **Escape** tuşu ile kapatabilirsiniz.

Proje **Next.js**, **TypeScript** ve **Tailwind CSS** ile yazılmıştır. Bu dosya (README), projeyi hiç bilmeyen birinin okuyup bilgisayarında çalıştırabilmesi için hazırlanmıştır.

**GitHub adresi:** [github.com/sevvalygn/Mektup](https://github.com/sevvalygn/Mektup)

---

## Kim tarafından yapıldı?

- **Proje sahibi / Repo sahibi:** [Sevval Yağan](https://github.com/sevvalygn) (GitHub kullanıcı adı: sevvalygn)
- **GitHub reposu:** [sevvalygn/Mektup](https://github.com/sevvalygn/Mektup) — tüm kod bu adreste tutulur.
- **Bağlam:** Proje, Elif Kaynar Ofis tarafından verilen görevler kapsamında geliştirilmiştir. Issue'lar açılmış, her özellik için ayrı branch kullanılmış ve evrensel commit kurallarına uygun commit'ler atılmıştır.

Sorularınız veya katkılarınız için GitHub repo sayfası veya ilgili ekip üzerinden iletişime geçebilirsiniz.

---

## Project Structure (Proje yapısı)

Projenin hangi klasörde hangi dosyaların olduğu ve bunların ne işe yaradığı aşağıda özetlenmiştir. Hiç bilmiyorsanız "Bu dosya ne?" diye baktığınızda bu bölüm size rehber olur.

```
mektup/
├── app/                        # Uygulamanın sayfaları ve ortak şablonu
│   ├── globals.css             # Genel stiller (renk, font vb.)
│   ├── layout.tsx              # Tüm sayfaları saran şablon (başlık, arka plan)
│   └── page.tsx                # Ana sayfa (zarf ve mektup burada kullanılır)
├── components/                 # Tekrar kullanılan parçalar (zarf, mektup kutusu)
│   ├── Zarf.tsx                # Zarf görseli ve tıklanabilir alan
│   └── MektupOverlay.tsx       # Açılan mektup kutusu (metin, kapatma butonu)
├── public/                     # Görseller gibi sabit dosyalar
│   └── zarf.png                # Ekranda gördüğünüz zarf görseli
├── docs/
│   └── ISSUES.md               # Geliştirme planı (issue listesi)
├── package.json                # Proje adı ve "hangi programlar kullanılıyor" listesi
├── package-lock.json           # Paket sürümlerinin sabitlenmiş hâli
├── tsconfig.json               # TypeScript ayarları
├── next.config.ts              # Next.js ayarları
├── tailwind.config.ts          # Tailwind (stil ve animasyon) ayarları
├── postcss.config.mjs          # Stil işleme ayarı
├── next-env.d.ts               # Next.js için tip tanımları
├── .gitignore                  # Git'in yedeklemeyeceği dosya/klasörler
└── README.md                   # Şu an okuduğunuz bu dosya
```

| Ne? | Ne işe yarar? |
|-----|----------------|
| **app/** | Uygulamanın sayfaları ve hepsinde ortak olan çerçeve (layout). Ana sayfa `page.tsx` içindedir. |
| **components/** | Zarf ve mektup kutusu gibi parçalar ayrı dosyalarda; böylece kod düzenli kalır. |
| **public/** | Bu klasördeki dosyalar (ör. zarf.png) doğrudan sitede kullanılır. `public/zarf.png` → tarayıcıda `/zarf.png` olarak açılır. |
| **package.json** | Proje adı ve bağımlılıklar (next, react, tailwind vb.). `npm install` ve `npm run dev` gibi komutlar buradan okunur. |

---

## Kendi bilgisayarımızda nasıl çalıştırabiliriz?

Aşağıdaki adımlar, projeyi hiç bilmeyen biri için yazılmıştır. Sırayla uyguladığınızda proje kendi bilgisayarınızda açılır.

### Önce bilgisayarınızda olması gerekenler

- **Node.js**  
  Web uygulamasını çalıştırmak ve `npm` komutlarını kullanmak için gerekir.  
  İndirmek için: [nodejs.org](https://nodejs.org) — "LTS" sürümünü seçin.

- **Git**  
  Projeyi internetten indirmek (clone) için gerekir.  
  İndirmek için: [git-scm.com](https://git-scm.com)

Kurduktan sonra **Terminal** (Mac/Linux) veya **PowerShell / Git Bash** (Windows) açıp şunları yazın; sürüm numarası görünüyorsa kurulum tamamdır:

```bash
node -v
npm -v
git -v
```

---

### Nasıl clone'layabiliriz? (Projeyi indirmek)

**Clone**, projeyi GitHub'dan kendi bilgisayarınıza kopyalamaktır. Bunun için **Git** kurulu olmalı.

1. **Terminal**'i (veya PowerShell / Git Bash) açın.
2. Projeyi koymak istediğiniz klasöre gidin. Örneğin Masaüstü veya Belgeler:
   ```bash
   cd ~/Documents
   ```
3. Aşağıdaki komutu **aynen** yazıp Enter'a basın:
   ```bash
   git clone https://github.com/sevvalygn/Mektup.git
   ```
4. İşlem bitince bulunduğunuz yerde **Mektup** adında bir klasör oluşur. İçine girmek için:
   ```bash
   cd Mektup
   ```

Bundan sonra tüm proje dosyaları bu **Mektup** klasörünün içindedir.

---

### Projeyi çalıştırmak (adım adım)

1. **Proje klasöründeyken** (yani `cd Mektup` yaptıktan sonra) bağımlılıkları yükleyin:
   ```bash
   npm install
   ```
   Bu komut, projenin ihtiyaç duyduğu paketleri (Next.js, React, Tailwind vb.) indirir. Birkaç dakika sürebilir.

2. Geliştirme sunucusunu başlatın:
   ```bash
   npm run dev
   ```
   Ekranda "Ready" veya "Local: http://localhost:3000" gibi bir satır görünecektir.

3. **Tarayıcınızı** (Chrome, Safari, Firefox vb.) açın, adres çubuğuna şunu yazın:
   ```
   http://localhost:3000
   ```
   Enter'a basın.

4. Sayfada zarf görseli görünmeli; zarfın üzerine tıklayınca mektup açılır.

Sunucuyu durdurmak için Terminal penceresinde **Ctrl + C** tuşlarına basın.

---

### Tüm komutları tek seferde (özet)

Projeyi ilk kez açacaksanız, Terminal'de sırayla şunları yazabilirsiniz:

```bash
cd ~/Documents
git clone https://github.com/sevvalygn/Mektup.git
cd Mektup
npm install
npm run dev
```

Sonra tarayıcıda **http://localhost:3000** adresine gidin.

---

## Diğer kısa bilgiler

- **Kullanılan teknolojiler:** Next.js 15 (App Router), TypeScript, Tailwind CSS  
- **Özellikler:** Zarf görseli, tıklanınca açılan mektup, × ile / dışarı tıklayınca / Escape ile kapanma, açılış animasyonları  
- **Yararlı komutlar:**  
  - `npm run dev` — Geliştirme için çalıştırma  
  - `npm run build` — Yayına hazır derleme  
  - `npm run start` — Derlenmiş projeyi çalıştırma  
  - `npm run lint` — Kod kontrolü (ESLint)  
- **Zarf görseli:** `public/zarf.png` dosyasından gelir; bu dosya yoksa zarf görünmez.  
- **İnternette yayınlama:** Proje [Vercel](https://vercel.com) ile deploy edilebilir; GitHub'daki **sevvalygn/Mektup** reposu Vercel'e bağlanarak canlıya alınabilir. Vercel'de "Add New Project" → bu repoyu seçin → **Deploy** ile yayına alın.
