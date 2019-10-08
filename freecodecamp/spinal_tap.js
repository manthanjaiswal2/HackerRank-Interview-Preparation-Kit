function spinalTap(str) {
	return str.replace(/[\s_]/g,'-').replace(/([a-z])([A-Z])/g,'$1-$2').toLowerCase();
}
spinalTap("ThisIsMe");

