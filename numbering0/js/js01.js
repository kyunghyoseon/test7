let elForm, elSelectPackage, elPackageHint, elTerms, elTermsHint;
elForm          = document.getElementById('formSignup');
elSelectPackage = document.getElementById('package');
elPackageHint   = document.getElementById('packageHint');
elTerms         = document.getElementById('terms');
elTermsHint     = document.getElementById('termsHint');

function packageHint() {
    pack = this.options[this.selectedIndex].value;

    if(pack == 'monthly'){
        elPackageHint.innerHTML = 'Silver';
    } else {
        elPackageHint.innerHTML = 'Gold';
    }
}

function checkTerms(e) {
    if (!elTerms,checked) { //!는 같지않다는 뜻 
        elTermsHint.innerHTML = '사용권 계약에 동의해야 합니다.';
        e.preventDefault();
    }
}

elForm.addEventListener('submit', checkTerms, false);
elSelectPackage.addEventListener('change', packageHint, false);