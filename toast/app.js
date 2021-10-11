
				let toast = document.createElement("div");
				toast.classList.add("toast","hidden");
				toast.innerHTML="Toast shown"
				document.body.append(toast);
				var gh$webSiteComponent = {
								toast:{
												init:()=>{
																document.querySelectorAll("[data-toast]").forEach(ev=>{
																ev.addEventListener("click",ev=>{
																				let text = ev.currentTarget.dataset.toast;
																				toast.innerHTML=text;
																				toast.classList.remove("hidden");
																				toast.classList.add("active");
																				if(document.body.classList.contains("dark")){
																								toast.classList.add("dark");
																								}else{
																								toast.classList.add("light");
																								}
																								setTimeout(e=>{
																												toast.classList.remove("active","dark","light");
																												toast.classList.add("hidden");
																											
																								},2000);
																				})
																				});
												}
								}
				}

