import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import {register} from 'timeago.js'
i18n.use(initReactI18next).init({
    resources: {
        en: {
            translations: {
                'Sign Up': 'Sign Up',
                'Password mismatch': 'Password mismatch',
                Username: 'Username',
                'Display Name': 'Display Name',
                Password: 'Password',
                'Password Repeat': 'Password Repeat',
                Login: 'Login',
                Logout: 'Logout',
                Users: 'Users',
                Next: 'next >',
                Previous: '< previous',
                'Load Failure': 'Load Failure',
                'User not found': 'User not found',
                'Edit': 'Edit',
                'Change Display Name': 'Change Display Name',
                Save: 'Save',
                Cancel: 'Cancel',
                'My Profile': 'My Profile',
                'There are no hoaxes': 'There are no hoaxes',
                'Load old hoaxes': 'Load old hoaxes',
                'There are new hoaxes': 'There are new hoaxes',
                'Delete Hoax': 'Delete Hoax',
                'Are you sure to delete hoax?': 'Are you sure to delete hoax?',
                'Delete My Account': 'Delete My Account',
                'Are you sure to delete your account?': 'Are you sure to delete your account?'
            }
        },
        tr: {
            translations: {
                'Sign Up': 'Kayıt Ol',
                'Password mismatch': 'Aynı şifreyi giriniz',
                Username: 'Kullanıcı Adı',
                'Display Name': 'Tercih Edilen İsim',
                Password: 'Şifre',
                'Password Repeat': 'Şifreyi Tekrarla',
                Login: 'Sisteme Gir',
                Logout: 'Çık',
                Users: 'Kullanıcılar',
                Next: 'sonraki >',
                Previous: '< önceki',
                'Load Failure': 'Liste alınamadı',
                'User not found': 'Kullanıcı bulunamadı',
                'Edit': 'Düzenle',
                'Change Display Name': 'Görünür İsminizi Değiştirin',
                Save: 'Kaydet',
                Cancel: 'İptal Et',
                'My Profile': 'Hesabım',
                'There are no hoaxes': 'Hoax bulunamadı',
                'Load old hoaxes': 'Geçmiş Hoaxları getir',
                'There are new hoaxes': 'Yeni Hoaxlar var',
                'Delete Hoax': `Hoax'u sil`,
                'Are you sure to delete hoax?': `Hoax'u silmek istediğinizden emin misiniz?`,
                'Delete My Account': 'Hesabımı Sil',
                'Are you sure to delete your account?': 'Hesabınızı silmek istediğinizden emin misiniz?'
            }
        },

        az: {
            translations: {
                'Sign Up': 'Qeydiyyatdan Keç',
                'Password mismatch': 'Eyni parolu girin',
                Username: 'İstifadəçi Adı',
                'Display Name': 'Görünən Ad',
                Password: 'Parol',
                'Password Repeat': 'Parolu Təkrarla',
                Login: 'Sistemə Gir',
                Logout: 'Çıx',
                Users: 'İstifadəçilər',
                Next: 'sonra >',
                Previous: '< əvvəl',
                'Load Failure': 'List alına bilmədi',
                'User not found': 'İstifadəçi tapılmadı',
                'Edit': 'Düzəliş et',
                'Change Display Name': 'Görünən Adı Dəyişin',
                Save: 'Yadda Saxla',
                Cancel: 'İmtina Et',
                'My Profile': 'Hesabım',
                'There are no hoaxes': 'Hoax tapılmadı',
                'Load old hoaxes': 'Keçmiş Hoaxları gətir',
                'There are new hoaxes': 'Yeni Hoaxlar var',
                'Delete Hoax': `Hoax'u sil`,
                'Are you sure to delete hoax?': `Hoax'u silmək istədiyinizdən əminsiniz?`,
                'Delete My Account': 'Hesabımı Sil',
                'Are you sure to delete your account?': 'Hesabınızı silmək istədiyinizdən əminsiniz?'
            }
        },

    },
    fallbackLng: 'en',
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
        escapeValue: false,
        formatSeparator: ','
    },
    react: {
        wait: true
    }
});

const timeageTR = (number, index) => {
    return [
        ['az önce', 'şimdi'],
        ['%s saniye önce', '%s saniye içinde'],
        ['1 dakika önce', '1 dakika içinde'],
        ['%s dakika önce', '%s dakika içinde'],
        ['1 saat önce', '1 saat içinde'],
        ['%s saat önce', '%s saat içinde'],
        ['1 gün önce', '1 gün içinde'],
        ['%s gün önce', '%s gün içinde'],
        ['1 hafta önce', '1 hafta içinde'],
        ['%s hafta önce', '%s hafta içinde'],
        ['1 ay önce', '1 ay içinde'],
        ['%s ay önce', '%s ay içinde'],
        ['1 yıl önce', '1 yıl içinde'],
        ['%s yıl önce', '%s yıl içinde'],
    ][index]
};

register('tr', timeageTR)

const timeageAZ = (number, index) => {
    return [
        ['az əvvəl', 'indi'],
        ['%s saniyə əvvəl', '%s saniyə içində'],
        ['1 dəqiqə əvvəl', '1 dəqiqə içində'],
        ['%s dəqiqə əvvəl', '%s dəqiqə içində'],
        ['1 saat əvvəl', '1 saat içində'],
        ['%s saat əvvəl', '%s saat içində'],
        ['1 gün əvvəl', '1 gün içində'],
        ['%s gün əvvəl', '%s gün içində'],
        ['1 həftə əvvəl', '1 həftə içində'],
        ['%s həftə əvvəl', '%s həftə içində'],
        ['1 ay əvvəl', '1 ay içində'],
        ['%s ay əvvəl', '%s ay içində'],
        ['1 il əvvəl', '1 il içində'],
        ['%s il əvvəl', '%s il içində'],
    ][index]
};

register('az', timeageAZ)


export default i18n;
