// condition ==string search
// many string pattern one touch chane

// Do use regular expressions
if (/iPhone|iPod|iPad/.test(navigator.userAgent)){
    console.log('Connect browser is IOS');
}
// Do not use regular expressions
if(
    navigator.userAgent.includes('iPhone') ||
    navigator.userAgent.includes('iPod') ||
    navigator.userAgent.includes('iPad')
) {
    console.log(' Connect browser is IOS');
}