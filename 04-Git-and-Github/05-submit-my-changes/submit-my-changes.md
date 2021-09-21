1. Fork repository GitHub https://github.com/impactbyte/tech4impact-students-bio.git menggunakan akun Github kamu.  
  **[Screenshot 1](https://drive.google.com/file/d/1zLkSidW80G25WDC-Ub-EaS3IMKvakid0/view?usp=sharing)**  
2. Clone remote repository dari hasil fork tersebut. Jangan clone dari repository originalnya.  
  **git clone https://github.com/rahmaninsani/tech4impact-students-bio.git**   

3. Buatlah branch baru dengan nama lengkap kamu. Misalnya `david-winalda`. Jangan melakukan perubahan pada branch `master`.  
  **git branch rahman-insani**  

4. Checkout ke dalam branch tersebut yang telah kamu buat  
  **git checkout rahman-insani**

5. Buatlah 1 file format `.md` dengan nama lengkap kamu. Contoh `davidwinalda.md`  
  **touch rahmaninsani.md**  
  **nano rahmaninsani.md**  
  
6. Isi file tersebut `davidwinalda.md` dengan konten di bawah ini:  
  ```
  Nama Lengkap: David Winalda
  Umur: 27
  Pesan yang ingin disampaikan: Semangat untuk kamu yang disana sedang berjuang
  ```  
  **[Screenshot 6a](https://drive.google.com/file/d/1f0WD7gJR_8a_LSqu75pXOWegRxp6OOYj/view?usp=sharing)**  
  **[Screenshot 6b](https://drive.google.com/file/d/1o5EkwCAaIarZkOAQmB-x6X88GKihQLA1/view?usp=sharing)**  
  
7. Masukkan file `.md` tersebut ke dalam staging area  
  **git add rahmaninsani.md**  

8. Commit dengan memberikan pesan nama file `.md` kamu  
  **git commit -m "rahmaninsani.md"**  

9. Merge branch yang telah kamu buat ke dalam branch `master`  
  **git checkout master**  
  **git merge rahman-insani**  

10. Push ke dalam branch `master`  
  **git push origin master**  

11. Lakukan pull request dari GitHub Repository yang telah kamu fork untuk digabungkan ke dalam branch `master` pada GitHub Repository aslinya.  
  **[Screenshot 11a](https://drive.google.com/file/d/1UoxxmfC82VpnBhCD34pg8fSQqWi1lQ4B/view?usp=sharing)**  
  **[Screenshot 11b](https://drive.google.com/file/d/1Fapj-TLca1ehglF4H7hCCkBRdxEIj6Gs/view?usp=sharing)**
