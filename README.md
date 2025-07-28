# Türkçe Voting App (Kedi & Köpek Oy Uygulaması)

Bu proje, Docker ve Node.js kullanılarak hazırlanmış basit bir oylama uygulamasıdır.  
Kullanıcılar "Kedi" veya "Köpek" için oy verebilir ve oy sonuçlarını canlı olarak görebilirler.

## Özellikler

- Modern, responsive ve tamamen Türkçe arayüz
- Docker Compose ile kolay kurulum
- Canlı oy güncellemesi
- Redis ile hızlı ve kolay veri saklama
- Kendi makinenizde veya bulutta kolayca çalıştırılabilir

## Kurulum

### Gereksinimler

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Hızlı Başlangıç

1. Bu repoyu klonlayın:
   ```bash
   git clone https://github.com/bburakCan90/voting-app.git
   cd voting-app

   	2.	Docker Compose ile tüm servisleri başlatın:
        docker-compose up --build

    3.	Uygulamayı tarayıcıda açın:
	•	Oy Ver: http://localhost:3000
	•	Sonuçları Gör: http://localhost:5001

    Proje Yapısı

    backend/   # Oy backend servisi (Node.js, Redis)
frontend/  # Kullanıcı arayüzü (HTML, CSS, JS)
result/    # Sonuç ekranı servisi
worker/    # Arka plan işçisi (geliştirilebilir)
docker-compose.yml # Tüm servisleri başlatan ana dosya

Katkı Sağlama

Katkı sağlamak isterseniz, issue açabilir veya pull request gönderebilirsiniz.

Lisans

MIT

---

> **Not:**
> - `ekran-goruntusu.png` için bir ekran görüntüsünü repo’ya ekleyebilirsin (isteğe bağlı).
> - Kendi ismini, bağlantılarını veya açıklamalarını ekleyebilirsin.
> - Gelişmiş özellikler veya canlı demo adresi varsa, ayrıca ekleyebilirsin.

---

### **Eklemek için:**

1. VS Code’da ana dizinde `README.md` adında yeni bir dosya oluştur.
2. Yukarıdaki içeriği yapıştır.
3. `git add README.md && git commit -m "README eklendi"` ve `git push` yap.

> **Not:**  
> Eğer uygulamayı bir sunucuda (örneğin Ubuntu Server) çalıştırıyorsanız, kendi bilgisayarınızdan uygulamaya erişmek için
> sunucunun IP adresini kullanmanız gerekir.
>
> Örneğin:  
> - Oy Ver: http://SUNUCU_IP_ADRESİ:3000  
> - Sonuçlar: http://SUNUCU_IP_ADRESİ:5001  
>
> Sunucuda grafik arayüz yoksa localhost ile değil, IP adresiyle erişin.  
> Grafik arayüz (ör. Ubuntu Desktop) ile kurulum yaptıysanız tarayıcıdan **localhost:3000** ile de erişebilirsiniz.

Sorunsuz olur!  
Başka bir şey istersen yazabilirsin. 👏