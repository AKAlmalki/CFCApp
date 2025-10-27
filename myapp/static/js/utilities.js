function toggleConditionalField(sourceElem, targetElemId, showValue='نعم') {
    const targetElem = document.getElementById(targetElemId);
    if (targetElem) {
        targetElem.style.display = (sourceElem.value === showValue) ? 'block' : 'none';
    }
}
