const banks = [
    { 'samaCode': '55', 'bankName': 'Banque Saudi Fransi' },
    { 'samaCode': '80', 'bankName': 'Alrajhi Bank' },
    { 'samaCode': '10', 'bankName': 'National Commercial Bank' },
    { 'samaCode': '45', 'bankName': 'Saudi British Bank' },
    { 'samaCode': '20', 'bankName': 'Riyadh Bank' },
    { 'samaCode': '40', 'bankName': 'Saudi American Bank' },
    { 'samaCode': '05', 'bankName': 'Alinma Bank' },
    { 'samaCode': '50', 'bankName': 'Alawwal bank' },
    { 'samaCode': '60', 'bankName': 'Bank AlJazira' },
    { 'samaCode': '65', 'bankName': 'Saudi Investment Bank' },
    { 'samaCode': '15', 'bankName': 'Bank AlBilad' },
    { 'samaCode': '30', 'bankName': 'Arab National Bank' },
    { 'samaCode': '90', 'bankName': 'GULF Bank' },
    { 'samaCode': '95', 'bankName': 'Emirates Bank' },
    { 'samaCode': '76', 'bankName': 'Bank Muscat' },
    { 'samaCode': '71', 'bankName': 'National Bank of Bahrain' },
    { 'samaCode': '75', 'bankName': 'National Bank of Kuwait' },
    { 'samaCode': '85', 'bankName': 'BNP Paribas Bank' }
];

function checkIban() {
    const ibanInput = document.getElementById('ibanInput').value.replace(/\s+/g, '');
    const resultDiv = document.getElementById('result');

    if (ibanInput.length === 24 && ibanInput.startsWith('SA')) {
        const bankCode = ibanInput.substring(2, 4);
        const bank = banks.find(b => b.samaCode === bankCode);

        if (bank) {
            resultDiv.innerHTML = `الايبان صحيح - ${bank.bankName}`;
            resultDiv.className = 'text-success';
        } else {
            resultDiv.innerHTML = 'الايبان صحيح - لكن البنك غير معروف';
            resultDiv.className = 'text-warning';
        }
    } else {
        resultDiv.innerHTML = 'الايبان غير صحيح';
        resultDiv.className = 'text-danger';
    }
}