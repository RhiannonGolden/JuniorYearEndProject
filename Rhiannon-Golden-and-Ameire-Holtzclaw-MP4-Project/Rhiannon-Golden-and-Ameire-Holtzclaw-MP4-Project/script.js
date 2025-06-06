function init_home(){ 
  let pictures = ["https://alphaleteathletics.com/cdn/shop/files/Power_LS_Black_1_d63bd318-0c70-46ed-8cbd-ff1815ee4a66_2500x.jpg?v=1740166233", "https://alphaleteathletics.com/cdn/shop/files/LS_KDM_Bra_Black_4_2500x.jpg?v=1733164310", "https://alphaleteathletics.com/cdn/shop/files/InfinityTechnicalJacketFormulaRed2_2500x.jpg?v=1738871230", 
    "https://alphaleteathletics.com/cdn/shop/files/Jan13th-EverydayCoreShort_Legging_AllureBodysuit-478_2500x.jpg?v=1738013682", 
    "https://alphaleteathletics.com/cdn/shop/files/Nov13th-EliteSwiftShort_SwiftShort_CoreTank_CoreTee-17179_2500x.jpg?v=1732137654", 
    "https://alphaleteathletics.com/cdn/shop/files/PeekabooLSBlack4_2500x.jpg?v=1738872696", 
  ];

  let gallery3 = new Gallery(pictures);
  let modal = new Modal( gallery3.render() );
  gallery3.play();
  gallery3.render("results");
}