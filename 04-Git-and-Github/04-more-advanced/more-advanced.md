1. What is the difference between `git reset` and `git revert`. When would you use one over the other?  
   a. **git reset** untuk rollback ke versi sebelumnya dengan menghapus seluruh commit sesudahnya. Digunakan jika riwayat commit sesudahnya (yang akan dihapus) memang sudah pasti tidak akan digunakan kembali.  
   b. **git revert** untuk rollback ke versi sebelumnya tanpa menghapus seluruh commit sesudahnya. Digunakan jika ingin melihat kondisi commit sebelumnya dan/atau kembali ke commit setelahnya (berpindah-pindah).  
   <br>
2. What is the difference between `git merge` and `git rebase`. When would you use one over the other?  
   a. **git merge** akan memindahkan dan menggabungkan commit yang ada di branch ke dalam branch main/master. Digunakan jika telah membuat cabang untuk mengembangkan satu fitur. Ketika ingin membawa perubahan-perubahan itu kembali ke main/master tanpa mempertahankan semua komitmen sementara.  
   b. **git rebase** akan menyalin dan menggabungkan commit yang ada di branch ke dalam branch main/master sehingga akan terbentuk satu commit baru hasil dari penggabungan tersebut. Digunakan jika kita melakukan beberapa pengembangan dan kemudian developer lain membuat perubahan yang tidak sesuai. Sehingga kita bisa pull dan rebase perubahan dari versi saat ini di repositori.  
   <br>
3. What is the difference between `git stash pop` and `git stash apply`. When would you use one over the other?  
   a. **git stash pop** stash yang baru saja di-restore ke sumber tidak akan dihapus dari stack. Digunakan jika ingin menerapkan perubahan top stashed ke perubahan non-staged saat ini dan menghapus stash tersebut.  
   b. **git stash apply** stash yang baru saja di-restore ke sumber akan hilang atau dihapus dari stack. Digunakan jika ingin menerapkan perubahan top stashed ke perubahan non-staged saat ini tanpa menghapus stash tersebut.  
   <br>

4. What kinds of things can you do in `interactive` mode when rebasing?  
   Dapat digunakan untuk mengubah commit dalam banyak cara seperti mengedit, menghapus, dan squashing.
