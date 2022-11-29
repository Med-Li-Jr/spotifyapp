
tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

errorMessageToastTrigger = document.getElementById('errorMessageToastBtn')
errorMessageToast = document.getElementById('errorMessageToast')

if (errorMessageToastTrigger) {
    errorMessageToast.addEventListener('hide.bs.toast', function () {
        let toastParent = (document.getElementById("toastParent"));
        toastParent?.classList.remove("showToastMessage")
        toastParent?.classList.add("hideToastMessage")
    })
    errorMessageToastTrigger.addEventListener('click', function () {
    const toast = new bootstrap.Toast(errorMessageToast)
    toast.show()
  })
}