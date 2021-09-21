1. What does `git clean` do?  
    **git clean** berfungsi menghapus file yang berstatus untracked  
   <br>
2. What do the `-d and -f` flags for `git clean` do?  
   a. **-d** untuk menentukan direktori yang akan di clean  
   b. **-f** atau **--force** untuk menghapus file atau direktori jika variabel konfigurasi Git clean.requireForce tidak diatur ke false  
   <br>
3. What `git` command creates a branch?  
   **git branch nama-branch**  
   <br>
4. What is the difference between a fast-forward and recursive merge?
   a. Fast-forward memiliki riwayat commit dengan garis atau cabang yang lurus (single-line).  
   b. Sedangkan recursive merge memiliki riwayat commit dengan beberapa garis atau cabang (multi-line).  
   <br>
5. What `git` command changes to another branch?  
   **git checkout nama-branch**  
   <br>
6. How do you remove **modified or deleted** files from the working directory?
   **git rm nama-direktori-atau-file**  
   <br>
7. What `git` command deletes a branch?  
   **git branch -d nama-branch**  
   <br>
8. What does the `git diff` command do?  
   **git diff** berfungsi untuk memberitahu kita secara mendetail apa saja perubahan yang terjadi di antara dua titik referensi Git.  
   <br>
9. How do you remove files from the staging area?  
   **git reset**  
   <br>
10. How do merge conflicts happen?  
    a. Si A commit push ke branch X. Si B, yang sudah memiliki commit di branch X mencoba pull sehingga menyebabkan perubahan yang tidak konsisten.
    <br><br>
    b. Si A merge perubahannya dari branch miliknya ke master. Si B lalu mencoba merge perubahannya dari branch miliknya ke master sehingga menyebabkan perubahan yang tidak konsisten.
    <br><br>
    c. Si A melakukan **git revert** yang mengubah hal yang setelahnya sempat diubah.
