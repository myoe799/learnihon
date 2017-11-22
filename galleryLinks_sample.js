												
												
												
												
												
												function hideAllGallery() {
													document.getElementById("marineGallery").style.display = "none";
													document.getElementById("germUVGallery").style.display = "none";
													document.getElementById("commGenLightGallery").style.display = "none";
													document.getElementById("elecEqGallery").style.display = "none";
													document.getElementById("ballastGallery").style.display = "none";
													document.getElementById("lampHolderGallery").style.display = "none";
													document.getElementById("xenonLampGallery").style.display = "none";
													document.getElementById("hospMedLampGallery").style.display = "none";
													document.getElementById("industrialGallery").style.display = "none";
												}
												
												function returnAllListItem() {
													document.getElementById("marineLink").className = "productcat-list-item";
													document.getElementById("germUVLink").className = "productcat-list-item";
													document.getElementById("commGenLightLink").className = "productcat-list-item";
													document.getElementById("elecEqLink").className = "productcat-list-item";
													document.getElementById("ballastLink").className = "productcat-list-item";
													document.getElementById("lampHolderLink").className = "productcat-list-item";
													document.getElementById("xenonLampLink").className = "productcat-list-item";
													document.getElementById("hospMedLampLink").className = "productcat-list-item";
													document.getElementById("industrialLink").className = "productcat-list-item";
												}
												
												function showMarineGallery() {
													hideAllGallery();
													returnAllListItem();
													document.getElementById("marineGallery").style.display = "block";
													document.getElementById("marineLink").className = "productcat-list-item active";
												}
												
												function showGermUVGallery() {
													hideAllGallery();
													returnAllListItem();
													document.getElementById("germUVGallery").style.display = "block";
													document.getElementById("germUVLink").className = "productcat-list-item active";
												}
												
												function showcommGenLightGallery() {
													hideAllGallery();
													returnAllListItem();
													document.getElementById("commGenLightGallery").style.display = "block";
													document.getElementById("commGenLightLink").className = "productcat-list-item active";
												}
												
												function showElecEqGallery() {
													hideAllGallery();
													returnAllListItem();
													document.getElementById("elecEqGallery").style.display = "block";
													document.getElementById("elecEqLink").className = "productcat-list-item active";
												}
												
												function showBallastGallery() {
													hideAllGallery();
													returnAllListItem();
													document.getElementById("ballastGallery").style.display = "block";
													document.getElementById("ballastLink").className = "productcat-list-item active";
												}
												
												function showLampHolderGallery() {
													hideAllGallery();
													returnAllListItem();
													document.getElementById("lampHolderGallery").style.display = "block";
													document.getElementById("lampHolderLink").className = "productcat-list-item active";
												}
												
												function showXenonLampGallery() {
													hideAllGallery();
													returnAllListItem();
													document.getElementById("xenonLampGallery").style.display = "block";
													document.getElementById("xenonLampLink").className = "productcat-list-item active";
												}
												
												function showHospMedLampGallery() {
													hideAllGallery();
													returnAllListItem();
													document.getElementById("hospMedLampGallery").style.display = "block";
													document.getElementById("hospMedLampLink").className = "productcat-list-item active";
												}
												
												function showIndustrialGallery() {
													hideAllGallery();
													returnAllListItem();
													document.getElementById("industrialGallery").style.display = "block";
													document.getElementById("industrialLink").className = "productcat-list-item active";
												}
												
												window.onload = function() {
																	document.getElementById("marineLink").addEventListener('click', showMarineGallery);
																	document.getElementById("germUVLink").addEventListener('click', showGermUVGallery);
																	document.getElementById("commGenLightLink").addEventListener('click', showcommGenLightGallery);
																	document.getElementById("elecEqLink").addEventListener('click', showElecEqGallery);
																	document.getElementById("xenonLampLink").addEventListener('click', showXenonLampGallery);
																	document.getElementById("hospMedLampLink").addEventListener('click', showHospMedLampGallery);
																	document.getElementById("ballastLink").addEventListener('click', showBallastGallery);
																	document.getElementById("lampHolderLink").addEventListener('click', showLampHolderGallery);
																	document.getElementById("industrialLink").addEventListener('click', showIndustrialGallery);
																}