Last login: Mon Apr 18 14:21:51 on ttys004

The default interactive shell is now zsh.
To update your account to use zsh, please run `chsh -s /bin/zsh`.
For more details, please visit https://support.apple.com/kb/HT208050.
(base) Nursima-MacBook-Air:~ simaasilturk$ cd Desktop
(base) Nursima-MacBook-Air:Desktop simaasilturk$ ls
Database System-lab			Ekran Resmi 2022-03-14 13.06.37.png	Ekran Resmi 2022-04-11 15.21.24.png	HTML-My first project			ilk_proje
Ekran Resmi 2022-03-07 16.31.02.png	Ekran Resmi 2022-03-15 05.53.37.png	Ekran Resmi 2022-04-13 14.27.34.png	JOB					mainproject
Ekran Resmi 2022-03-07 16.34.31.png	Ekran Resmi 2022-04-07 12.23.01.png	GitKursu				Tüm klasörler				~$ftalık rapor taslağı.docx
(base) Nursima-MacBook-Air:Desktop simaasilturk$ mkdir Book
(base) Nursima-MacBook-Air:Desktop simaasilturk$ ls
Book					Ekran Resmi 2022-03-14 13.06.37.png	Ekran Resmi 2022-04-13 14.27.34.png	Tüm klasörler
Database System-lab			Ekran Resmi 2022-03-15 05.53.37.png	GitKursu				ilk_proje
Ekran Resmi 2022-03-07 16.31.02.png	Ekran Resmi 2022-04-07 12.23.01.png	HTML-My first project			mainproject
Ekran Resmi 2022-03-07 16.34.31.png	Ekran Resmi 2022-04-11 15.21.24.png	JOB					~$ftalık rapor taslağı.docx
(base) Nursima-MacBook-Air:Desktop simaasilturk$ cd Book
(base) Nursima-MacBook-Air:Book simaasilturk$ git status
warning: could not open directory '.Trash/': Operation not permitted
warning: could not open directory 'Documents/': Operation not permitted
On branch master
Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   ../mainproject/karabook/.env.example
	modified:   ../mainproject/karabook/app/Http/Kernel.php
	modified:   ../mainproject/karabook/app/Models/User.php
	modified:   ../mainproject/karabook/app/Providers/AuthServiceProvider.php
	modified:   ../mainproject/karabook/app/Providers/RouteServiceProvider.php
	modified:   ../mainproject/karabook/composer.json
	modified:   ../mainproject/karabook/composer.lock
	modified:   ../mainproject/karabook/config/app.php
	modified:   ../mainproject/karabook/config/database.php
	modified:   ../mainproject/karabook/config/sanctum.php
	modified:   ../mainproject/karabook/config/session.php
	modified:   ../mainproject/karabook/database/factories/UserFactory.php
	modified:   ../mainproject/karabook/database/migrations/2014_10_12_000000_create_users_table.php
	modified:   ../mainproject/karabook/database/migrations/2019_12_14_000001_create_personal_access_tokens_table.php
	modified:   ../mainproject/karabook/package.json
	modified:   ../mainproject/karabook/resources/css/app.css
	modified:   ../mainproject/karabook/resources/js/app.js
	deleted:    ../mainproject/karabook/resources/views/welcome.blade.php
	modified:   ../mainproject/karabook/routes/web.php
	modified:   ../mainproject/karabook/webpack.mix.js
	modified:   ../../README.md

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	../../.CFUserTextEncoding
	../../.DS_Store
	../../.anaconda/
	../../.bash_history
	../../.bash_profile
	../../.bash_profile.pysave
	../../.bash_sessions/
	../../.cache/
	../../.composer/
	../../.conda/
	../../.condarc
	../../.config/
	../../.continuum/
	../../.gitconfig
	../../.gradle/
	../../.idlerc/
	../../.ipython/
	../../.jupyter/
	../../.lesshst
	../../.matplotlib/
	../../.npm/
	../../.oracle_jre_usage/
	../../.pylint.d/
	../../.pylintrc
	../../.python_history
	../../.python_history-01121.tmp
	../../.tcshrc
	../../.thumbnails/
	../../.viminfo
	../../.vscode/
	../../.xonshrc
	../../.zprofile
	../../.zprofile.pysave
	../../.zsh_history
	../../.zsh_sessions/
	../../.zshrc
	../../Applications/
	../../Creative Cloud Files/
	../.DS_Store
	../.ipynb_checkpoints/
	../.localized
	../.png.webp
	../Database System-lab/
	../Ekran Resmi 2022-03-07 16.31.02.png
	../Ekran Resmi 2022-03-07 16.34.31.png
	../Ekran Resmi 2022-03-14 13.06.37.png
	../Ekran Resmi 2022-03-15 05.53.37.png
	../Ekran Resmi 2022-04-07 12.23.01.png
	../Ekran Resmi 2022-04-11 15.21.24.png
	../Ekran Resmi 2022-04-13 14.27.34.png
	../GitKursu/
	../HTML-My first project/
	../JOB/
	"../T\303\274m klas\303\266rler/"
	../ilk_proje/
	../mainproject/.DS_Store
	../mainproject/karabook/app/Actions/
	../mainproject/karabook/app/Http/Controllers/AdminController.php
	../mainproject/karabook/app/Http/Controllers/CategoryController.php
	../mainproject/karabook/app/Http/Controllers/HomeController.php
	../mainproject/karabook/app/Http/Middleware/HandleInertiaRequests.php
	../mainproject/karabook/app/Models/Category.php
	../mainproject/karabook/app/Models/Membership.php
	../mainproject/karabook/app/Models/Team.php
	../mainproject/karabook/app/Models/TeamInvitation.php
	../mainproject/karabook/app/Policies/
	../mainproject/karabook/app/Providers/FortifyServiceProvider.php
	../mainproject/karabook/app/Providers/JetstreamServiceProvider.php
	../mainproject/karabook/config/fortify.php
	../mainproject/karabook/config/jetstream.php
	../mainproject/karabook/database/factories/TeamFactory.php
	../mainproject/karabook/database/migrations/2014_10_12_200000_add_two_factor_columns_to_users_table.php
	../mainproject/karabook/database/migrations/2020_05_21_100000_create_teams_table.php
	../mainproject/karabook/database/migrations/2020_05_21_200000_create_team_user_table.php
	../mainproject/karabook/database/migrations/2020_05_21_300000_create_team_invitations_table.php
	../mainproject/karabook/database/migrations/2022_04_04_100759_create_sessions_table.php
	../mainproject/karabook/database/migrations/2022_04_17_115502_create_categories_table.php
	../mainproject/karabook/package-lock.json
	../mainproject/karabook/public/assets/
	../mainproject/karabook/public/css/
	../mainproject/karabook/public/js/
	../mainproject/karabook/public/mix-manifest.json
	../mainproject/karabook/resources/js/Jetstream/
	../mainproject/karabook/resources/js/Layouts/
	../mainproject/karabook/resources/js/Pages/
	../mainproject/karabook/resources/markdown/
	../mainproject/karabook/resources/views/admin/
	../mainproject/karabook/resources/views/app.blade.php
	../mainproject/karabook/resources/views/home/
	../mainproject/karabook/resources/views/layouts/
	../mainproject/karabook/tailwind.config.js
	../mainproject/karabook/templates/
	../mainproject/karabook/tests/Feature/ApiTokenPermissionsTest.php
	../mainproject/karabook/tests/Feature/AuthenticationTest.php
	../mainproject/karabook/tests/Feature/BrowserSessionsTest.php
	../mainproject/karabook/tests/Feature/CreateApiTokenTest.php
	../mainproject/karabook/tests/Feature/CreateTeamTest.php
	../mainproject/karabook/tests/Feature/DeleteAccountTest.php
	../mainproject/karabook/tests/Feature/DeleteApiTokenTest.php
	../mainproject/karabook/tests/Feature/DeleteTeamTest.php
	../mainproject/karabook/tests/Feature/EmailVerificationTest.php
	../mainproject/karabook/tests/Feature/InviteTeamMemberTest.php
	../mainproject/karabook/tests/Feature/LeaveTeamTest.php
	../mainproject/karabook/tests/Feature/PasswordConfirmationTest.php
	../mainproject/karabook/tests/Feature/PasswordResetTest.php
	../mainproject/karabook/tests/Feature/ProfileInformationTest.php
	../mainproject/karabook/tests/Feature/RegistrationTest.php
	../mainproject/karabook/tests/Feature/RemoveTeamMemberTest.php
	../mainproject/karabook/tests/Feature/TwoFactorAuthenticationSettingsTest.php
	../mainproject/karabook/tests/Feature/UpdatePasswordTest.php
	../mainproject/karabook/tests/Feature/UpdateTeamMemberRoleTest.php
	../mainproject/karabook/tests/Feature/UpdateTeamNameTest.php
	"../~$ftal\304\261k rapor tasla\304\237\304\261.docx"
	../../Downloads/
	../../Java/
	../../Library/
	../../Movies/
	../../Music/
	../../NetBeansProjects/
	../../OneDrive/
	../../Pictures/
	../../Public/
	../../PycharmProjects/
	../../Python_temelleri,.py
	../../__pycache__/
	../../conversion.py
	../../darknet/
	../../dict.py
	../../envs/
	../../get-pip.py
	../../listeler.py
	../../musteri.py
	../../mvlwsnkvl.py
	../../number.py
	../../opt/
	../../ornek.py
	../../projects/
	../../public class Main {.java
	../../string.py

no changes added to commit (use "git add" and/or "git commit -a")
(base) Nursima-MacBook-Air:Book simaasilturk$ git init
Initialized empty Git repository in /Users/simaasilturk/Desktop/Book/.git/
(base) Nursima-MacBook-Air:Book simaasilturk$ git status
On branch master

No commits yet

nothing to commit (create/copy files and use "git add" to track)
(base) Nursima-MacBook-Air:Book simaasilturk$ touch library.txt
(base) Nursima-MacBook-Air:Book simaasilturk$  git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	library.txt

nothing added to commit but untracked files present (use "git add" to track)
(base) Nursima-MacBook-Air:Book simaasilturk$ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	library.txt

nothing added to commit but untracked files present (use "git add" to track)
(base) Nursima-MacBook-Air:Book simaasilturk$ git add library.txt
(base) Nursima-MacBook-Air:Book simaasilturk$ git commit -m 'blah blah'
[master (root-commit) 7f2f4b7] blah blah
 1 file changed, 6 insertions(+)
 create mode 100644 library.txt
(base) Nursima-MacBook-Air:Book simaasilturk$  git log
commit 7f2f4b780d18a9a9af9a587d48ad841ea8bb63f3 (HEAD -> master)
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 17:50:16 2022 +0300

    blah blah
(base) Nursima-MacBook-Air:Book simaasilturk$  git branch
* master
(base) Nursima-MacBook-Air:Book simaasilturk$  git add .
(base) Nursima-MacBook-Air:Book simaasilturk$ git commit -m "another writing"
[master 2e8901d] another writing
 1 file changed, 20 insertions(+), 1 deletion(-)
(base) Nursima-MacBook-Air:Book simaasilturk$ git log
commit 2e8901d1198ffd82b1801978ce7e5bbf167cfd05 (HEAD -> master)
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 17:52:26 2022 +0300

    another writing

commit 7f2f4b780d18a9a9af9a587d48ad841ea8bb63f3
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 17:50:16 2022 +0300

    blah blah
(base) Nursima-MacBook-Air:Book simaasilturk$  git branch feature
(base) Nursima-MacBook-Air:Book simaasilturk$ git status
On branch master
nothing to commit, working tree clean
(base) Nursima-MacBook-Air:Book simaasilturk$ git branch
  feature
* master
(base) Nursima-MacBook-Air:Book simaasilturk$ git switch feature
Switched to branch 'feature'
(base) Nursima-MacBook-Air:Book simaasilturk$ git branch
* feature
  master
(base) Nursima-MacBook-Air:Book simaasilturk$ git log
commit 2e8901d1198ffd82b1801978ce7e5bbf167cfd05 (HEAD -> feature, master)
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 17:52:26 2022 +0300

    another writing

commit 7f2f4b780d18a9a9af9a587d48ad841ea8bb63f3
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 17:50:16 2022 +0300

    blah blah
(base) Nursima-MacBook-Air:Book simaasilturk$ touch deneme.txt
(base) Nursima-MacBook-Air:Book simaasilturk$ git add .
(base) Nursima-MacBook-Air:Book simaasilturk$ git commit -m 'new file created'
[feature 5a45eb4] new file created
 1 file changed, 17 insertions(+)
 create mode 100644 deneme.txt
(base) Nursima-MacBook-Air:Book simaasilturk$ git log
commit 5a45eb41e809e72f6d1b45a3424a15827f6a6450 (HEAD -> feature)
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 17:57:51 2022 +0300

    new file created

commit 2e8901d1198ffd82b1801978ce7e5bbf167cfd05 (master)
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 17:52:26 2022 +0300

    another writing

commit 7f2f4b780d18a9a9af9a587d48ad841ea8bb63f3
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 17:50:16 2022 +0300

    blah blah
(base) Nursima-MacBook-Air:Book simaasilturk$ git add .
(base) Nursima-MacBook-Air:Book simaasilturk$ git commit -m 'language changed'
[feature f643af9] language changed
 1 file changed, 10 insertions(+)
(base) Nursima-MacBook-Air:Book simaasilturk$ git log
commit f643af980d8520655652c47e2faaee2d6f830f89 (HEAD -> feature)
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 17:58:49 2022 +0300

    language changed

commit 5a45eb41e809e72f6d1b45a3424a15827f6a6450
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 17:57:51 2022 +0300

    new file created

commit 2e8901d1198ffd82b1801978ce7e5bbf167cfd05 (master)
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 17:52:26 2022 +0300

    another writing

commit 7f2f4b780d18a9a9af9a587d48ad841ea8bb63f3
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 17:50:16 2022 +0300

    blah blah
(base) Nursima-MacBook-Air:Book simaasilturk$  git branch
* feature
  master
(base) Nursima-MacBook-Air:Book simaasilturk$ git switch master
Switched to branch 'master'
(base) Nursima-MacBook-Air:Book simaasilturk$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   library.txt

no changes added to commit (use "git add" and/or "git commit -a")
(base) Nursima-MacBook-Air:Book simaasilturk$  git commit -m 'changed first dirc.'
On branch master
Changes not staged for commit:
	modified:   library.txt

no changes added to commit
(base) Nursima-MacBook-Air:Book simaasilturk$ git add .
(base) Nursima-MacBook-Air:Book simaasilturk$ git commit -m 'changed first dirc.'
[master c228ba4] changed first dirc.
 1 file changed, 23 insertions(+)
(base) Nursima-MacBook-Air:Book simaasilturk$ git add .
(base) Nursima-MacBook-Air:Book simaasilturk$ git commit -m 'last changing'
[master 3606eb7] last changing
 1 file changed, 12 insertions(+)
(base) Nursima-MacBook-Air:Book simaasilturk$ git log
commit 3606eb7063e5f895bf9d2eb5c18c93936288473a (HEAD -> master)
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 18:03:29 2022 +0300

    last changing

commit c228ba44e5951315eccea3f22b99a930d61de8f4
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 18:02:23 2022 +0300

    changed first dirc.

commit 2e8901d1198ffd82b1801978ce7e5bbf167cfd05
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 17:52:26 2022 +0300

    another writing

commit 7f2f4b780d18a9a9af9a587d48ad841ea8bb63f3
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 17:50:16 2022 +0300

    blah blah
(base) Nursima-MacBook-Air:Book simaasilturk$ git switch feature
Switched to branch 'feature'
(base) Nursima-MacBook-Air:Book simaasilturk$ git log
commit f643af980d8520655652c47e2faaee2d6f830f89 (HEAD -> feature)
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 17:58:49 2022 +0300

    language changed

commit 5a45eb41e809e72f6d1b45a3424a15827f6a6450
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 17:57:51 2022 +0300

    new file created

commit 2e8901d1198ffd82b1801978ce7e5bbf167cfd05
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 17:52:26 2022 +0300

    another writing

commit 7f2f4b780d18a9a9af9a587d48ad841ea8bb63f3
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 17:50:16 2022 +0300

    blah blah
(base) Nursima-MacBook-Air:Book simaasilturk$ git switch master
Switched to branch 'master'
(base) Nursima-MacBook-Air:Book simaasilturk$ git merge feature
hint: Waiting for your editor to close the file... code --wait: code: command not found
error: There was a problem with the editor 'code --wait'.
Not committing merge; use 'git commit' to complete the merge.
(base) Nursima-MacBook-Air:Book simaasilturk$ git commit -m 'feature saved'
[master 46280bf] feature saved
(base) Nursima-MacBook-Air:Book simaasilturk$ git log
commit 46280bf560d336210d7f5e14f1fd9b49565d0fad (HEAD -> master)
Merge: 3606eb7 f643af9
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 18:06:25 2022 +0300

    feature saved

commit 3606eb7063e5f895bf9d2eb5c18c93936288473a
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 18:03:29 2022 +0300

    last changing

commit c228ba44e5951315eccea3f22b99a930d61de8f4
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 18:02:23 2022 +0300

    changed first dirc.

commit f643af980d8520655652c47e2faaee2d6f830f89 (feature)
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 17:58:49 2022 +0300

    language changed

commit 5a45eb41e809e72f6d1b45a3424a15827f6a6450
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 17:57:51 2022 +0300

    new file created

commit 2e8901d1198ffd82b1801978ce7e5bbf167cfd05
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 17:52:26 2022 +0300

    another writing

commit 7f2f4b780d18a9a9af9a587d48ad841ea8bb63f3
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 17:50:16 2022 +0300

    blah blah
(base) Nursima-MacBook-Air:Book simaasilturk$  git status
On branch master
nothing to commit, working tree clean
(base) Nursima-MacBook-Air:Book simaasilturk$ git branch backstage
(base) Nursima-MacBook-Air:Book simaasilturk$ git branch
  backstage
  feature
* master
(base) Nursima-MacBook-Air:Book simaasilturk$ git switch backstage
Switched to branch 'backstage'
(base) Nursima-MacBook-Air:Book simaasilturk$ touch kapak.txt
(base) Nursima-MacBook-Air:Book simaasilturk$ git status
On branch backstage
Untracked files:
  (use "git add <file>..." to include in what will be committed)
	kapak.txt

nothing added to commit but untracked files present (use "git add" to track)
(base) Nursima-MacBook-Air:Book simaasilturk$ git add .
(base) Nursima-MacBook-Air:Book simaasilturk$ git commit -m 'created new section'
[backstage 89a2e10] created new section
 1 file changed, 41 insertions(+)
 create mode 100644 kapak.txt
(base) Nursima-MacBook-Air:Book simaasilturk$ git log
commit 89a2e10781fa931d7c55f803873b5a3d3c93a702 (HEAD -> backstage)
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 18:15:15 2022 +0300

    created new section

commit 46280bf560d336210d7f5e14f1fd9b49565d0fad (master)
Merge: 3606eb7 f643af9
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 18:06:25 2022 +0300

    feature saved

commit 3606eb7063e5f895bf9d2eb5c18c93936288473a
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 18:03:29 2022 +0300

    last changing

commit c228ba44e5951315eccea3f22b99a930d61de8f4
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 18:02:23 2022 +0300

    changed first dirc.

commit f643af980d8520655652c47e2faaee2d6f830f89 (feature)
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 17:58:49 2022 +0300

    language changed

commit 5a45eb41e809e72f6d1b45a3424a15827f6a6450
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 17:57:51 2022 +0300

    new file created

commit 2e8901d1198ffd82b1801978ce7e5bbf167cfd05
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 17:52:26 2022 +0300

    another writing

commit 7f2f4b780d18a9a9af9a587d48ad841ea8bb63f3
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 17:50:16 2022 +0300

    blah blah
(base) Nursima-MacBook-Air:Book simaasilturk$ git switch master
Switched to branch 'master'
(base) Nursima-MacBook-Air:Book simaasilturk$ git log
commit 46280bf560d336210d7f5e14f1fd9b49565d0fad (HEAD -> master)
Merge: 3606eb7 f643af9
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 18:06:25 2022 +0300

    feature saved

commit 3606eb7063e5f895bf9d2eb5c18c93936288473a
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 18:03:29 2022 +0300

    last changing

commit c228ba44e5951315eccea3f22b99a930d61de8f4
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 18:02:23 2022 +0300

    changed first dirc.

commit f643af980d8520655652c47e2faaee2d6f830f89 (feature)
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 17:58:49 2022 +0300

    language changed

commit 5a45eb41e809e72f6d1b45a3424a15827f6a6450
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 17:57:51 2022 +0300

    new file created

commit 2e8901d1198ffd82b1801978ce7e5bbf167cfd05
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 17:52:26 2022 +0300

    another writing

commit 7f2f4b780d18a9a9af9a587d48ad841ea8bb63f3
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 17:50:16 2022 +0300

    blah blah
(base) Nursima-MacBook-Air:Book simaasilturk$  git merge backstage
Updating 46280bf..89a2e10
Fast-forward
 kapak.txt | 41 +++++++++++++++++++++++++++++++++++++++++
 1 file changed, 41 insertions(+)
 create mode 100644 kapak.txt
(base) Nursima-MacBook-Air:Book simaasilturk$ git log
commit 89a2e10781fa931d7c55f803873b5a3d3c93a702 (HEAD -> master, backstage)
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 18:15:15 2022 +0300

    created new section

commit 46280bf560d336210d7f5e14f1fd9b49565d0fad
Merge: 3606eb7 f643af9
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 18:06:25 2022 +0300

    feature saved

commit 3606eb7063e5f895bf9d2eb5c18c93936288473a
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 18:03:29 2022 +0300

    last changing

commit c228ba44e5951315eccea3f22b99a930d61de8f4
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 18:02:23 2022 +0300

    changed first dirc.

commit f643af980d8520655652c47e2faaee2d6f830f89 (feature)
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 17:58:49 2022 +0300

    language changed

commit 5a45eb41e809e72f6d1b45a3424a15827f6a6450
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 17:57:51 2022 +0300

    new file created

commit 2e8901d1198ffd82b1801978ce7e5bbf167cfd05
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 17:52:26 2022 +0300

    another writing

commit 7f2f4b780d18a9a9af9a587d48ad841ea8bb63f3
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 17:50:16 2022 +0300

    blah blah
(base) Nursima-MacBook-Air:Book simaasilturk$   cd ..
(base) Nursima-MacBook-Air:Desktop simaasilturk$ mkdir Python
(base) Nursima-MacBook-Air:Desktop simaasilturk$ cd Python
(base) Nursima-MacBook-Air:Python simaasilturk$ git init
Initialized empty Git repository in /Users/simaasilturk/Desktop/Python/.git/
(base) Nursima-MacBook-Air:Python simaasilturk$ touch ilkbolum.txt
(base) Nursima-MacBook-Air:Python simaasilturk$ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	ilkbolum.txt

nothing added to commit but untracked files present (use "git add" to track)
(base) Nursima-MacBook-Air:Python simaasilturk$ git add .
(base) Nursima-MacBook-Air:Python simaasilturk$ git commit -m "first applying"
[master (root-commit) 8635d50] first applying
 1 file changed, 41 insertions(+)
 create mode 100644 ilkbolum.txt
(base) Nursima-MacBook-Air:Python simaasilturk$ git branch
* master
(base) Nursima-MacBook-Air:Python simaasilturk$ git branch image
(base) Nursima-MacBook-Air:Python simaasilturk$  git switch image
Switched to branch 'image'
(base) Nursima-MacBook-Air:Python simaasilturk$  git add .
(base) Nursima-MacBook-Air:Python simaasilturk$ git commit -m 'new writing'
[image c4c8352] new writing
 1 file changed, 22 insertions(+), 16 deletions(-)
(base) Nursima-MacBook-Air:Python simaasilturk$ git switch master
Switched to branch 'master'
(base) Nursima-MacBook-Air:Python simaasilturk$ rm ilkbolum.txt
(base) Nursima-MacBook-Air:Python simaasilturk$  touch section.txt
(base) Nursima-MacBook-Air:Python simaasilturk$ git add .
(base) Nursima-MacBook-Air:Python simaasilturk$ git commit -m 'bulshitt'
[master 110a8a8] bulshitt
 2 files changed, 22 insertions(+), 41 deletions(-)
 delete mode 100644 ilkbolum.txt
 create mode 100644 section.txt
(base) Nursima-MacBook-Air:Python simaasilturk$ git branch
  image
* master
(base) Nursima-MacBook-Air:Python simaasilturk$ git merge image
CONFLICT (modify/delete): ilkbolum.txt deleted in HEAD and modified in image. Version image of ilkbolum.txt left in tree.
Automatic merge failed; fix conflicts and then commit the result.
(base) Nursima-MacBook-Air:Python simaasilturk$ git merge image
error: Merging is not possible because you have unmerged files.
hint: Fix them up in the work tree, and then use 'git add/rm <file>'
hint: as appropriate to mark resolution and make a commit.
fatal: Exiting because of an unresolved conflict.
(base) Nursima-MacBook-Air:Python simaasilturk$ git status
On branch master
You have unmerged paths.
  (fix conflicts and run "git commit")
  (use "git merge --abort" to abort the merge)

Unmerged paths:
  (use "git add/rm <file>..." as appropriate to mark resolution)
	deleted by us:   ilkbolum.txt

no changes added to commit (use "git add" and/or "git commit -a")
(base) Nursima-MacBook-Air:Python simaasilturk$ git add .
(base) Nursima-MacBook-Air:Python simaasilturk$ git commit -m 'merge cozuldu'
[master 80473f8] merge cozuldu
(base) Nursima-MacBook-Air:Python simaasilturk$ git merge image
Already up to date.
(base) Nursima-MacBook-Air:Python simaasilturk$ git log
commit 80473f8ddfddfec6ab36110ebc718825b50ada00 (HEAD -> master)
Merge: 110a8a8 c4c8352
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 18:30:20 2022 +0300

    merge cozuldu

commit 110a8a821d1fec8206436c2b2f227f77d721e4e6
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 18:25:35 2022 +0300

    bulshitt

commit c4c83520e62dd6731571618edc14c2e41c39c8da (image)
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 18:23:32 2022 +0300

    new writing

commit 8635d503393ed7f1d1b7e2b11e8d0490529d8063
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 18:21:19 2022 +0300

    first applying
(base) Nursima-MacBook-Air:Python simaasilturk$ git branch
  image
* master
(base) Nursima-MacBook-Air:Python simaasilturk$ git branch extra
(base) Nursima-MacBook-Air:Python simaasilturk$ git switch extra
Switched to branch 'extra'
(base) Nursima-MacBook-Air:Python simaasilturk$ touch extrabolumler.txt
(base) Nursima-MacBook-Air:Python simaasilturk$ git add .
(base) Nursima-MacBook-Air:Python simaasilturk$ git status
On branch extra
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	new file:   extrabolumler.txt

(base) Nursima-MacBook-Air:Python simaasilturk$ git switch master
A	extrabolumler.txt
Switched to branch 'master'
(base) Nursima-MacBook-Air:Python simaasilturk$  git switch extra
A	extrabolumler.txt
Switched to branch 'extra'
(base) Nursima-MacBook-Air:Python simaasilturk$ git status
On branch extra
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	new file:   extrabolumler.txt

(base) Nursima-MacBook-Air:Python simaasilturk$ git commit -m ' eklendş'
[extra 80389e4]  eklendş
 1 file changed, 10 insertions(+)
 create mode 100644 extrabolumler.txt
(base) Nursima-MacBook-Air:Python simaasilturk$ git switch master
Switched to branch 'master'
(base) Nursima-MacBook-Air:Python simaasilturk$ git switch extra
Switched to branch 'extra'
(base) Nursima-MacBook-Air:Python simaasilturk$ git status
On branch extra
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   extrabolumler.txt

no changes added to commit (use "git add" and/or "git commit -a")
(base) Nursima-MacBook-Air:Python simaasilturk$  git switch master
error: Your local changes to the following files would be overwritten by checkout:
	extrabolumler.txt
Please commit your changes or stash them before you switch branches.
Aborting
(base) Nursima-MacBook-Air:Python simaasilturk$ git restore ilkbolum.txt
(base) Nursima-MacBook-Air:Python simaasilturk$ git stash
Saved working directory and index state WIP on extra: 80389e4  eklendş
(base) Nursima-MacBook-Air:Python simaasilturk$ git stash pop
On branch extra
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   extrabolumler.txt

no changes added to commit (use "git add" and/or "git commit -a")
Dropped refs/stash@{0} (50f298d825bd014ea221dd126bdd416f9782c313)
(base) Nursima-MacBook-Air:Python simaasilturk$  git stash
Saved working directory and index state WIP on extra: 80389e4  eklendş
(base) Nursima-MacBook-Air:Python simaasilturk$ git stash list
stash@{0}: WIP on extra: 80389e4 eklendş
(base) Nursima-MacBook-Air:Python simaasilturk$ git stash
Saved working directory and index state WIP on extra: 80389e4  eklendş
(base) Nursima-MacBook-Air:Python simaasilturk$ git stash list
stash@{0}: WIP on extra: 80389e4 eklendş
stash@{1}: WIP on extra: 80389e4 eklendş
(base) Nursima-MacBook-Air:Python simaasilturk$ git stash apply stash@{0}
On branch extra
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   extrabolumler.txt

no changes added to commit (use "git add" and/or "git commit -a")
(base) Nursima-MacBook-Air:Python simaasilturk$  git stash clear,
fatal: unknown subcommand: clear,

usage: git stash list [<options>]
   or: git stash show [<options>] [<stash>]
   or: git stash drop [-q|--quiet] [<stash>]
   or: git stash ( pop | apply ) [--index] [-q|--quiet] [<stash>]
   or: git stash branch <branchname> [<stash>]
   or: git stash clear
   or: git stash [push [-p|--patch] [-k|--[no-]keep-index] [-q|--quiet]
          [-u|--include-untracked] [-a|--all] [-m|--message <message>]
          [--] [<pathspec>...]]
   or: git stash save [-p|--patch] [-k|--[no-]keep-index] [-q|--quiet]
          [-u|--include-untracked] [-a|--all] [<message>]

(base) Nursima-MacBook-Air:Python simaasilturk$ git stash clear
(base) Nursima-MacBook-Air:Python simaasilturk$ git stash list
(base) Nursima-MacBook-Air:Python simaasilturk$ git stash clear
(base) Nursima-MacBook-Air:Python simaasilturk$ git status
On branch extra
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   extrabolumler.txt

no changes added to commit (use "git add" and/or "git commit -a")
(base) Nursima-MacBook-Air:Python simaasilturk$ git add .
(base) Nursima-MacBook-Air:Python simaasilturk$ git commit -m 'stash öğrenildi.'
[extra 9bfe947] stash öğrenildi.
 1 file changed, 3 insertions(+), 1 deletion(-)
(base) Nursima-MacBook-Air:Python simaasilturk$  cd ..
(base) Nursima-MacBook-Air:Desktop simaasilturk$ mkdir Github Eğitimi
(base) Nursima-MacBook-Air:Desktop simaasilturk$ ls
Book					Ekran Resmi 2022-03-14 13.06.37.png	Ekran Resmi 2022-04-13 14.27.34.png	HTML-My first project			ilk_proje
Database System-lab			Ekran Resmi 2022-03-15 05.53.37.png	Eğitimi					JOB					mainproject
Ekran Resmi 2022-03-07 16.31.02.png	Ekran Resmi 2022-04-07 12.23.01.png	GitKursu				Python					~$ftalık rapor taslağı.docx
Ekran Resmi 2022-03-07 16.34.31.png	Ekran Resmi 2022-04-11 15.21.24.png	Github					Tüm klasörler
(base) Nursima-MacBook-Air:Desktop simaasilturk$ mv Python Github
(base) Nursima-MacBook-Air:Desktop simaasilturk$ ls
Book					Ekran Resmi 2022-03-14 13.06.37.png	Ekran Resmi 2022-04-13 14.27.34.png	HTML-My first project			mainproject
Database System-lab			Ekran Resmi 2022-03-15 05.53.37.png	Eğitimi					JOB					~$ftalık rapor taslağı.docx
Ekran Resmi 2022-03-07 16.31.02.png	Ekran Resmi 2022-04-07 12.23.01.png	GitKursu				Tüm klasörler
Ekran Resmi 2022-03-07 16.34.31.png	Ekran Resmi 2022-04-11 15.21.24.png	Github					ilk_proje
(base) Nursima-MacBook-Air:Desktop simaasilturk$ cd Github
(base) Nursima-MacBook-Air:Github simaasilturk$ ls
Python
(base) Nursima-MacBook-Air:Github simaasilturk$ mv GitKursu Github
mv: rename GitKursu to Github: No such file or directory
(base) Nursima-MacBook-Air:Github simaasilturk$ cd Desktop
-bash: cd: Desktop: No such file or directory
(base) Nursima-MacBook-Air:Github simaasilturk$ pwd
/Users/simaasilturk/Desktop/Github
(base) Nursima-MacBook-Air:Github simaasilturk$ cd ..
(base) Nursima-MacBook-Air:Desktop simaasilturk$ mv Book Github
(base) Nursima-MacBook-Air:Desktop simaasilturk$ mv GitKursu Github
(base) Nursima-MacBook-Air:Desktop simaasilturk$ cd Github
(base) Nursima-MacBook-Air:Github simaasilturk$ ls
Book		GitKursu	Python
(base) Nursima-MacBook-Air:Github simaasilturk$ mkdir Yapayzeka
(base) Nursima-MacBook-Air:Github simaasilturk$ cd Yapayzeka
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git status
warning: could not open directory '.Trash/': Operation not permitted
warning: could not open directory 'Documents/': Operation not permitted
On branch master
Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   ../../mainproject/karabook/.env.example
	modified:   ../../mainproject/karabook/app/Http/Kernel.php
	modified:   ../../mainproject/karabook/app/Models/User.php
	modified:   ../../mainproject/karabook/app/Providers/AuthServiceProvider.php
	modified:   ../../mainproject/karabook/app/Providers/RouteServiceProvider.php
	modified:   ../../mainproject/karabook/composer.json
	modified:   ../../mainproject/karabook/composer.lock
	modified:   ../../mainproject/karabook/config/app.php
	modified:   ../../mainproject/karabook/config/database.php
	modified:   ../../mainproject/karabook/config/sanctum.php
	modified:   ../../mainproject/karabook/config/session.php
	modified:   ../../mainproject/karabook/database/factories/UserFactory.php
	modified:   ../../mainproject/karabook/database/migrations/2014_10_12_000000_create_users_table.php
	modified:   ../../mainproject/karabook/database/migrations/2019_12_14_000001_create_personal_access_tokens_table.php
	modified:   ../../mainproject/karabook/package.json
	modified:   ../../mainproject/karabook/resources/css/app.css
	modified:   ../../mainproject/karabook/resources/js/app.js
	deleted:    ../../mainproject/karabook/resources/views/welcome.blade.php
	modified:   ../../mainproject/karabook/routes/web.php
	modified:   ../../mainproject/karabook/webpack.mix.js
	modified:   ../../../README.md

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	../../../.CFUserTextEncoding
	../../../.DS_Store
	../../../.anaconda/
	../../../.bash_history
	../../../.bash_profile
	../../../.bash_profile.pysave
	../../../.bash_sessions/
	../../../.cache/
	../../../.composer/
	../../../.conda/
	../../../.condarc
	../../../.config/
	../../../.continuum/
	../../../.gitconfig
	../../../.gradle/
	../../../.idlerc/
	../../../.ipython/
	../../../.jupyter/
	../../../.lesshst
	../../../.matplotlib/
	../../../.npm/
	../../../.oracle_jre_usage/
	../../../.pylint.d/
	../../../.pylintrc
	../../../.python_history
	../../../.python_history-01121.tmp
	../../../.tcshrc
	../../../.thumbnails/
	../../../.viminfo
	../../../.vscode/
	../../../.xonshrc
	../../../.zprofile
	../../../.zprofile.pysave
	../../../.zsh_history
	../../../.zsh_sessions/
	../../../.zshrc
	../../../Applications/
	../../../Creative Cloud Files/
	../../.DS_Store
	../../.ipynb_checkpoints/
	../../.localized
	../../.png.webp
	../../Database System-lab/
	../../Ekran Resmi 2022-03-07 16.31.02.png
	../../Ekran Resmi 2022-03-07 16.34.31.png
	../../Ekran Resmi 2022-03-14 13.06.37.png
	../../Ekran Resmi 2022-03-15 05.53.37.png
	../../Ekran Resmi 2022-04-07 12.23.01.png
	../../Ekran Resmi 2022-04-11 15.21.24.png
	../../Ekran Resmi 2022-04-13 14.27.34.png
	../
	../../HTML-My first project/
	../../JOB/
	"../../T\303\274m klas\303\266rler/"
	../../ilk_proje/
	../../mainproject/.DS_Store
	../../mainproject/karabook/app/Actions/
	../../mainproject/karabook/app/Http/Controllers/AdminController.php
	../../mainproject/karabook/app/Http/Controllers/CategoryController.php
	../../mainproject/karabook/app/Http/Controllers/HomeController.php
	../../mainproject/karabook/app/Http/Middleware/HandleInertiaRequests.php
	../../mainproject/karabook/app/Models/Category.php
	../../mainproject/karabook/app/Models/Membership.php
	../../mainproject/karabook/app/Models/Team.php
	../../mainproject/karabook/app/Models/TeamInvitation.php
	../../mainproject/karabook/app/Policies/
	../../mainproject/karabook/app/Providers/FortifyServiceProvider.php
	../../mainproject/karabook/app/Providers/JetstreamServiceProvider.php
	../../mainproject/karabook/config/fortify.php
	../../mainproject/karabook/config/jetstream.php
	../../mainproject/karabook/database/factories/TeamFactory.php
	../../mainproject/karabook/database/migrations/2014_10_12_200000_add_two_factor_columns_to_users_table.php
	../../mainproject/karabook/database/migrations/2020_05_21_100000_create_teams_table.php
	../../mainproject/karabook/database/migrations/2020_05_21_200000_create_team_user_table.php
	../../mainproject/karabook/database/migrations/2020_05_21_300000_create_team_invitations_table.php
	../../mainproject/karabook/database/migrations/2022_04_04_100759_create_sessions_table.php
	../../mainproject/karabook/database/migrations/2022_04_17_115502_create_categories_table.php
	../../mainproject/karabook/package-lock.json
	../../mainproject/karabook/public/assets/
	../../mainproject/karabook/public/css/
	../../mainproject/karabook/public/js/
	../../mainproject/karabook/public/mix-manifest.json
	../../mainproject/karabook/resources/js/Jetstream/
	../../mainproject/karabook/resources/js/Layouts/
	../../mainproject/karabook/resources/js/Pages/
	../../mainproject/karabook/resources/markdown/
	../../mainproject/karabook/resources/views/admin/
	../../mainproject/karabook/resources/views/app.blade.php
	../../mainproject/karabook/resources/views/home/
	../../mainproject/karabook/resources/views/layouts/
	../../mainproject/karabook/tailwind.config.js
	../../mainproject/karabook/templates/
	../../mainproject/karabook/tests/Feature/ApiTokenPermissionsTest.php
	../../mainproject/karabook/tests/Feature/AuthenticationTest.php
	../../mainproject/karabook/tests/Feature/BrowserSessionsTest.php
	../../mainproject/karabook/tests/Feature/CreateApiTokenTest.php
	../../mainproject/karabook/tests/Feature/CreateTeamTest.php
	../../mainproject/karabook/tests/Feature/DeleteAccountTest.php
	../../mainproject/karabook/tests/Feature/DeleteApiTokenTest.php
	../../mainproject/karabook/tests/Feature/DeleteTeamTest.php
	../../mainproject/karabook/tests/Feature/EmailVerificationTest.php
	../../mainproject/karabook/tests/Feature/InviteTeamMemberTest.php
	../../mainproject/karabook/tests/Feature/LeaveTeamTest.php
	../../mainproject/karabook/tests/Feature/PasswordConfirmationTest.php
	../../mainproject/karabook/tests/Feature/PasswordResetTest.php
	../../mainproject/karabook/tests/Feature/ProfileInformationTest.php
	../../mainproject/karabook/tests/Feature/RegistrationTest.php
	../../mainproject/karabook/tests/Feature/RemoveTeamMemberTest.php
	../../mainproject/karabook/tests/Feature/TwoFactorAuthenticationSettingsTest.php
	../../mainproject/karabook/tests/Feature/UpdatePasswordTest.php
	../../mainproject/karabook/tests/Feature/UpdateTeamMemberRoleTest.php
	../../mainproject/karabook/tests/Feature/UpdateTeamNameTest.php
	"../../~$ftal\304\261k rapor tasla\304\237\304\261.docx"
	../../../Downloads/
	../../../Java/
	../../../Library/
	../../../Movies/
	../../../Music/
	../../../NetBeansProjects/
	../../../OneDrive/
	../../../Pictures/
	../../../Public/
	../../../PycharmProjects/
	../../../Python_temelleri,.py
	../../../__pycache__/
	../../../conversion.py
	../../../darknet/
	../../../dict.py
	../../../envs/
	../../../get-pip.py
	../../../listeler.py
	../../../musteri.py
	../../../mvlwsnkvl.py
	../../../number.py
	../../../opt/
	../../../ornek.py
	../../../projects/
	../../../public class Main {.java
	../../../string.py

no changes added to commit (use "git add" and/or "git commit -a")
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git init
Initialized empty Git repository in /Users/simaasilturk/Desktop/Github/Yapayzeka/.git/
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git status
On branch master

No commits yet

nothing to commit (create/copy files and use "git add" to track)
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ touch machine_learning.txt
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ touch deep_learning.txt
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ touch image_processing.txt
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ ls
deep_learning.txt	image_processing.txt	machine_learning.txt
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	deep_learning.txt
	image_processing.txt
	machine_learning.txt

nothing added to commit but untracked files present (use "git add" to track)
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git add .
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git commit -m 'new files created'
[master (root-commit) 0dac2a2] new files created
 3 files changed, 21 insertions(+)
 create mode 100644 deep_learning.txt
 create mode 100644 image_processing.txt
 create mode 100644 machine_learning.txt
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$  git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   deep_learning.txt

no changes added to commit (use "git add" and/or "git commit -a")
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git restore deep_learning.txt
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   deep_learning.txt

no changes added to commit (use "git add" and/or "git commit -a")
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git add .
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git commit -m 'new changes'
[master 9165cd2] new changes
 1 file changed, 12 insertions(+), 1 deletion(-)
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$  git log
commit 9165cd2c22f8d2fe7f7376c91cc5fda350c12606 (HEAD -> master)
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 21:34:00 2022 +0300

    new changes

commit 0dac2a2f95da6b4103b4b62b06376bddf15c7823
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 21:30:31 2022 +0300

    new files created
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   machine_learning.txt

no changes added to commit (use "git add" and/or "git commit -a")
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git add .
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git commit -m 'yeni dosyaya bilgiler yazıldı.'
[master 994cb33] yeni dosyaya bilgiler yazıldı.
 1 file changed, 8 insertions(+)
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git log
commit 994cb3320af1f80a97d7e8b2f2c1127ac906f98a (HEAD -> master)
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 21:36:38 2022 +0300

    yeni dosyaya bilgiler yazıldı.

commit 9165cd2c22f8d2fe7f7376c91cc5fda350c12606
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 21:34:00 2022 +0300

    new changes

commit 0dac2a2f95da6b4103b4b62b06376bddf15c7823
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 21:30:31 2022 +0300

    new files created
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$  git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   machine_learning.txt

no changes added to commit (use "git add" and/or "git commit -a")
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git add .
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git commit -m 'makine öğrenmesi yeni bilgiler'
[master 4c56ae3] makine öğrenmesi yeni bilgiler
 1 file changed, 15 insertions(+)
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git log
commit 4c56ae325c66fe2d8e27c324be8cf81a4e0973af (HEAD -> master)
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 21:39:35 2022 +0300

    makine öğrenmesi yeni bilgiler

commit 994cb3320af1f80a97d7e8b2f2c1127ac906f98a
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 21:36:38 2022 +0300

    yeni dosyaya bilgiler yazıldı.

commit 9165cd2c22f8d2fe7f7376c91cc5fda350c12606
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 21:34:00 2022 +0300

    new changes

commit 0dac2a2f95da6b4103b4b62b06376bddf15c7823
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 21:30:31 2022 +0300

    new files created
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git checkout 994cb3320af1f80a97d7e8b2f2c1127ac906f98a
Note: switching to '994cb3320af1f80a97d7e8b2f2c1127ac906f98a'.

You are in 'detached HEAD' state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by switching back to a branch.

If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -c with the switch command. Example:

  git switch -c <new-branch-name>

Or undo this operation with:

  git switch -

Turn off this advice by setting config variable advice.detachedHead to false

HEAD is now at 994cb33 yeni dosyaya bilgiler yazıldı.
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git log
commit 994cb3320af1f80a97d7e8b2f2c1127ac906f98a (HEAD)
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 21:36:38 2022 +0300

    yeni dosyaya bilgiler yazıldı.

commit 9165cd2c22f8d2fe7f7376c91cc5fda350c12606
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 21:34:00 2022 +0300

    new changes

commit 0dac2a2f95da6b4103b4b62b06376bddf15c7823
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 21:30:31 2022 +0300

    new files created
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git checkout 0dac2a2f95da6b4103b4b62b06376bddf15c7823
Previous HEAD position was 994cb33 yeni dosyaya bilgiler yazıldı.
HEAD is now at 0dac2a2 new files created
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git log
commit 0dac2a2f95da6b4103b4b62b06376bddf15c7823 (HEAD)
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 21:30:31 2022 +0300

    new files created
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git branch
* (HEAD detached at 0dac2a2)
  master
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git branch feat
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git switch feat
Switched to branch 'feat'
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git branch
* feat
  master
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git add .
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git commit -m 'machine learning'
[feat c6d309f] machine learning
 1 file changed, 4 insertions(+)
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git log
commit c6d309ffea24349c2b23980b793af092934e22ea (HEAD -> feat)
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 21:45:46 2022 +0300

    machine learning

commit 0dac2a2f95da6b4103b4b62b06376bddf15c7823
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 21:30:31 2022 +0300

    new files created
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git switch master
Switched to branch 'master'
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git log
commit 4c56ae325c66fe2d8e27c324be8cf81a4e0973af (HEAD -> master)
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 21:39:35 2022 +0300

    makine öğrenmesi yeni bilgiler

commit 994cb3320af1f80a97d7e8b2f2c1127ac906f98a
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 21:36:38 2022 +0300

    yeni dosyaya bilgiler yazıldı.

commit 9165cd2c22f8d2fe7f7376c91cc5fda350c12606
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 21:34:00 2022 +0300

    new changes

commit 0dac2a2f95da6b4103b4b62b06376bddf15c7823
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 21:30:31 2022 +0300

    new files created
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$  git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   image_processing.txt

no changes added to commit (use "git add" and/or "git commit -a")
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git add .
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git commit -m 'image processing'
[master f9a145c] image processing
 1 file changed, 11 insertions(+)
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git add .
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git commit -m 'image processing next commit'
[master aedb78d] image processing next commit
 1 file changed, 45 insertions(+), 1 deletion(-)
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git add .
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git commit -m 'machine learning commits'
[master 351f10a] machine learning commits
 1 file changed, 41 insertions(+)
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git log
commit 351f10af28048efeadba5da511ff3bc73b1e1e6d (HEAD -> master)
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 21:54:48 2022 +0300

    machine learning commits

commit aedb78d08d3566fa3aa6214e4e7884f65343cdd2
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 21:53:36 2022 +0300

    image processing next commit

commit f9a145cb6841649c9432c64fff172fa4282d733a
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 21:51:24 2022 +0300

    image processing

commit 4c56ae325c66fe2d8e27c324be8cf81a4e0973af
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 21:39:35 2022 +0300

    makine öğrenmesi yeni bilgiler

commit 994cb3320af1f80a97d7e8b2f2c1127ac906f98a
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 21:36:38 2022 +0300

    yeni dosyaya bilgiler yazıldı.

commit 9165cd2c22f8d2fe7f7376c91cc5fda350c12606
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 21:34:00 2022 +0300

    new changes

commit 0dac2a2f95da6b4103b4b62b06376bddf15c7823
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 21:30:31 2022 +0300

    new files created
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$  git reset f9a145cb6841649c9432c64fff172fa4282d733a
Unstaged changes after reset:
M	image_processing.txt
M	machine_learning.txt
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git log
commit f9a145cb6841649c9432c64fff172fa4282d733a (HEAD -> master)
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 21:51:24 2022 +0300

    image processing

commit 4c56ae325c66fe2d8e27c324be8cf81a4e0973af
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 21:39:35 2022 +0300

    makine öğrenmesi yeni bilgiler

commit 994cb3320af1f80a97d7e8b2f2c1127ac906f98a
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 21:36:38 2022 +0300

    yeni dosyaya bilgiler yazıldı.

commit 9165cd2c22f8d2fe7f7376c91cc5fda350c12606
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 21:34:00 2022 +0300

    new changes

commit 0dac2a2f95da6b4103b4b62b06376bddf15c7823
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 21:30:31 2022 +0300

    new files created
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git reset --hard 4c56ae325c66fe2d8e27c324be8cf81a4e0973af
HEAD is now at 4c56ae3 makine öğrenmesi yeni bilgiler
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git add .
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git commit -m 'beşinci commit'
[master b3b468b] beşinci commit
 1 file changed, 2 insertions(+)
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git add .
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git commit -m 'altıncı commit,2
> clear()
> 
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git commit -m 'altıncı commit'
[master 8ac977a] altıncı commit
 1 file changed, 5 insertions(+), 1 deletion(-)
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git add .
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git commit -m 'yedinci commit'
[master 19d44b2] yedinci commit
 1 file changed, 4 insertions(+), 1 deletion(-)
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git log
commit 19d44b2c928533c1ee72d178215b247b35b83b79 (HEAD -> master)
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 22:01:24 2022 +0300

    yedinci commit

commit 8ac977a11e4474e0ca616b5a6e8e74de9024f09a
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 22:01:02 2022 +0300

    altıncı commit

commit b3b468b7207cb5268974f9cb64624da17b88ae43
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 21:59:44 2022 +0300

    beşinci commit

commit 4c56ae325c66fe2d8e27c324be8cf81a4e0973af
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 21:39:35 2022 +0300

    makine öğrenmesi yeni bilgiler

commit 994cb3320af1f80a97d7e8b2f2c1127ac906f98a
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 21:36:38 2022 +0300

    yeni dosyaya bilgiler yazıldı.

commit 9165cd2c22f8d2fe7f7376c91cc5fda350c12606
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 21:34:00 2022 +0300

    new changes

commit 0dac2a2f95da6b4103b4b62b06376bddf15c7823
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 21:30:31 2022 +0300

    new files created
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$  git revert 19d44b2c928533c1ee72d178215b247b35b83b79
hint: Waiting for your editor to close the file... code --wait: code: command not found
error: There was a problem with the editor 'code --wait'.
Please supply the message using either -m or -F option.
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git commit -m 'yedinci commit yeniden'
[master 51635cc] yedinci commit yeniden
 1 file changed, 1 insertion(+), 4 deletions(-)
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git log
commit 51635cc9e2dfdb96e2b8f8793ca8201fe655f526 (HEAD -> master)
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 22:03:25 2022 +0300

    yedinci commit yeniden

commit 19d44b2c928533c1ee72d178215b247b35b83b79
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 22:01:24 2022 +0300

    yedinci commit

commit 8ac977a11e4474e0ca616b5a6e8e74de9024f09a
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 22:01:02 2022 +0300

    altıncı commit

commit b3b468b7207cb5268974f9cb64624da17b88ae43
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 21:59:44 2022 +0300

    beşinci commit

commit 4c56ae325c66fe2d8e27c324be8cf81a4e0973af
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 21:39:35 2022 +0300

    makine öğrenmesi yeni bilgiler

commit 994cb3320af1f80a97d7e8b2f2c1127ac906f98a
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 21:36:38 2022 +0300

    yeni dosyaya bilgiler yazıldı.

commit 9165cd2c22f8d2fe7f7376c91cc5fda350c12606
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 21:34:00 2022 +0300

    new changes

commit 0dac2a2f95da6b4103b4b62b06376bddf15c7823
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 21:30:31 2022 +0300

    new files created
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git revert 8ac977a11e4474e0ca616b5a6e8e74de9024f09a
hint: Waiting for your editor to close the file... code --wait: code: command not found
error: There was a problem with the editor 'code --wait'.
Please supply the message using either -m or -F option.
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git log
commit 51635cc9e2dfdb96e2b8f8793ca8201fe655f526 (HEAD -> master)
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 22:03:25 2022 +0300

    yedinci commit yeniden

commit 19d44b2c928533c1ee72d178215b247b35b83b79
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 22:01:24 2022 +0300

    yedinci commit

commit 8ac977a11e4474e0ca616b5a6e8e74de9024f09a
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 22:01:02 2022 +0300

    altıncı commit

commit b3b468b7207cb5268974f9cb64624da17b88ae43
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 21:59:44 2022 +0300

    beşinci commit

commit 4c56ae325c66fe2d8e27c324be8cf81a4e0973af
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 21:39:35 2022 +0300

    makine öğrenmesi yeni bilgiler

commit 994cb3320af1f80a97d7e8b2f2c1127ac906f98a
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 21:36:38 2022 +0300

    yeni dosyaya bilgiler yazıldı.

commit 9165cd2c22f8d2fe7f7376c91cc5fda350c12606
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 21:34:00 2022 +0300

    new changes

commit 0dac2a2f95da6b4103b4b62b06376bddf15c7823
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 21:30:31 2022 +0300

    new files created
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git add .
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git commit -m 'yeni değişiklik'
[master aeff3cf] yeni değişiklik
 1 file changed, 1 deletion(-)
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git diff
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$  git add .
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	modified:   machine_learning.txt

(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git diff
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git diff.
git: 'diff.' is not a git command. See 'git --help'.

The most similar command is
	diff
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git diff .
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git diff
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	modified:   machine_learning.txt

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   machine_learning.txt

(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git diff
diff --git a/machine_learning.txt b/machine_learning.txt
index 12d6cec..c003be9 100644
--- a/machine_learning.txt
+++ b/machine_learning.txt
@@ -27,4 +27,6 @@ All of these things mean it's possible to quickly and automatically produce mode
 
 6. commit
 
-7. commit
\ No newline at end of file
+7. commit
+
+8. commit
\ No newline at end of file
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git diff HEAD
diff --git a/machine_learning.txt b/machine_learning.txt
index cfa14a1..c003be9 100644
--- a/machine_learning.txt
+++ b/machine_learning.txt
@@ -25,4 +25,8 @@ All of these things mean it's possible to quickly and automatically produce mode
 5. commit
 
 
-6. commit
\ No newline at end of file
+6. commit
+
+7. commit
+
+8. commit
\ No newline at end of file
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git log
commit aeff3cf57c998f65e94a3cb8acdd4ba4bdad15ab (HEAD -> master)
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 22:10:35 2022 +0300

    yeni değişiklik

commit 51635cc9e2dfdb96e2b8f8793ca8201fe655f526
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 22:03:25 2022 +0300

    yedinci commit yeniden

commit 19d44b2c928533c1ee72d178215b247b35b83b79
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 22:01:24 2022 +0300

    yedinci commit

commit 8ac977a11e4474e0ca616b5a6e8e74de9024f09a
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 22:01:02 2022 +0300

    altıncı commit

commit b3b468b7207cb5268974f9cb64624da17b88ae43
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 21:59:44 2022 +0300

    beşinci commit

commit 4c56ae325c66fe2d8e27c324be8cf81a4e0973af
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 21:39:35 2022 +0300

    makine öğrenmesi yeni bilgiler

commit 994cb3320af1f80a97d7e8b2f2c1127ac906f98a
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 21:36:38 2022 +0300

    yeni dosyaya bilgiler yazıldı.

commit 9165cd2c22f8d2fe7f7376c91cc5fda350c12606
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 21:34:00 2022 +0300

    new changes

commit 0dac2a2f95da6b4103b4b62b06376bddf15c7823
Author: Nursima Asiltürk <nursima.asilturk99@gmail.com>
Date:   Mon Apr 18 21:30:31 2022 +0300

    new files created
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$  git diff aeff3cf57c998f65e94a3cb8acdd4ba4bdad15ab 19d44b2c928533c1ee72d178215b247b35b83b79
diff --git a/machine_learning.txt b/machine_learning.txt
index cfa14a1..e46c8d3 100644
--- a/machine_learning.txt
+++ b/machine_learning.txt
@@ -25,4 +25,8 @@ All of these things mean it's possible to quickly and automatically produce mode
 5. commit
 
 
-6. commit
\ No newline at end of file
+
+6. commit
+
+
+7. commit
\ No newline at end of file
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git diff aeff3cf57c998f65e94a3cb8acdd4ba4bdad15ab..19d44b2c928533c1ee72d178215b247b35b83b79
diff --git a/machine_learning.txt b/machine_learning.txt
index cfa14a1..e46c8d3 100644
--- a/machine_learning.txt
+++ b/machine_learning.txt
@@ -25,4 +25,8 @@ All of these things mean it's possible to quickly and automatically produce mode
 5. commit
 
 
-6. commit
\ No newline at end of file
+
+6. commit
+
+
+7. commit
\ No newline at end of file
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git branch
  feat
* master
(base) Nursima-MacBook-Air:Yapayzeka simaasilturk$ git diff master feat
diff --git a/deep_learning.txt b/deep_learning.txt
index ac7a56b..f10761a 100644
--- a/deep_learning.txt
+++ b/deep_learning.txt
@@ -18,15 +18,4 @@ Machine learning and deep learning models are capable of different types of lear
 
 For a deeper dive on the nuanced differences between the different technologies, see "AI vs. Machine Learning vs. Deep Learning vs. Neural Networks: What’s the Difference?"
 
-For a closer look at the specific differences between supervised and unsupervised learning, see "Supervised vs. Unsupervised Lea
-
-
-
-
-
-How deep learning works
-Deep learning neural networks, or artificial neural networks, attempts to mimic the human brain through a combination of data inputs, weights, and bias. These elements work together to accurately recognize, classify, and describe objects within the data.
-
-Deep neural networks consist of multiple layers of interconnected nodes, each building upon the previous layer to refine and optimize the prediction or categorization. This progression of computations through the network is called forward propagation. The input and output layers of a deep neural network are called visible layers. The input layer is where the deep learning model ingests the data for processing, and the output layer is where the final prediction or classification is made.
-
-Another process called backpropagation uses algorithms, like gradient descent, to calculate errors in predictions and then adjusts the weights and biases of the function by moving backwards through the layers in an effort to train the model. Together, forward propagation and backpropagation allow a neural network to make predictions and correct for any errors accordingly. Over time, the algorithm becomes gradually more accurate.
\ No newline at end of file
+For a closer look at the specific differences between supervised and unsupervised learning, see "Supervised vs. Unsupervised Lea
\ No newline at end of file
diff --git a/machine_learning.txt b/machine_learning.txt
index cfa14a1..88f2eec 100644
--- a/machine_learning.txt
+++ b/machine_learning.txt
@@ -1,28 +1,4 @@
-Evolution of machine learning
-Because of new computing technologies, machine learning today is not like machine learning of the past. It was born from pattern recognition and the theory that computers can learn without being programmed to perform specific tasks; researchers interested in artificial intelligence wanted to see if computers could learn from data. The iterative aspect of machine learning is important because as models are exposed to new data, they are able to independently adapt. They learn from previous computations to produce reliable, repeatable decisions and results. It’s a science that’s not new – but one that has gained fresh momentum.
-While many machine learning algorithms have been around for a long time, the ability to automatically apply complex mathematical calculations to big data – over and over, faster and faster – is a recent development. Here are a few widely publicized examples of machine learning applications you may be familiar with:
-
-The heavily hyped, self-driving Google car? The essence of machine learning.
-Online recommendation offers such as those from Amazon and Netflix? Machine learning applications for everyday life.
-Knowing what customers are saying about you on Twitter? Machine learning combined with linguistic rule creation.
-Fraud detection? One of the more obvious, important uses in our world today.
-
-
-
-
-
-
-
-
-
-
-
 Why is machine learning important?
 Resurging interest in machine learning is due to the same factors that have made data mining and Bayesian analysis more popular than ever. Things like growing volumes and varieties of available data, computational processing that is cheaper and more powerful, and affordable data storage.
 
 All of these things mean it's possible to quickly and automatically produce models that can analyze bigger, more complex data and deliver faster, more accurate results – even on a very large scale. And by building precise models, an organization has a better chance of identifying profitable opportunities – or avoiding unknown risks.
:
