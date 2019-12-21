export const categories = [
    {
      id: 1,
      name: 'Thịt Gà',
      photo_url:
      'https://www.bellandevans.com/wp-content/uploads/Whole_Roast_Chicken_Web-750x560.jpg'
    },
    {
      id: 2,
      name: 'Thịt heo',
      photo_url: 'https://compote.slate.com/images/300dba82-40df-413d-86fe-78c942b0fd94.jpeg?width=780&height=520&rect=1560x1040&offset=0x0'
    },
    {
      id: 3,
      name: 'Thịt bò',
      photo_url:
        'https://i2.wp.com/themom100.com/wp-content/uploads/2013/02/roast-beef-with-mustard-garlic-crust-44-horiz.jpg?fit=2000%2C1333&ssl=1'
    },
    {
      id: 4,
      name: 'Cá',
      photo_url:
      'https://i.redd.it/dhe1s7o4rko01.jpg'
    },
    {
      id: 5,
      name: 'Món chay',
      photo_url: 'http://www.savourydays.com/wp-content/uploads/2019/01/c%C3%A1ch-l%C3%A0m-n%E1%BB%99m-b%C3%B2-kh%C3%B4-banner.jpg'
    },
    {
      id: 6,
      name: "Canh",
      photo_url: 'https://monngonmoingay.com/wp-content/uploads/2015/08/AGF_1954-canh-chua-dau-ca-hoi.png'
    }
  ];
  
  export const recipes = [
    {
      recipeId: 1,
      categoryId: 1,
      title: 'Gà kho me',
      photo_url: 'https://nauankhongkho.com/wp-content/uploads/2015/12/cach-lam-ga-kho-me-chua-ngot-thom-lung-cuc-la-mieng.jpg',
      time: '20',
      ingredients: [
        {name: 'Thịt gà', unit: '500'},
        {name: 'Hạt nêm', unit: '5g'},
        {name: 'Nước mắm', unit: '20ml'},
        {name: 'Tương ớt', unit: '20g'},
        {name: 'Sả', unit: '10g'},
        {name: 'Tỏi', unit: '10g'},
        {name: 'Đường', unit: '40g'},
        {name: 'Hành tây', unit: '10g'},
        {name: 'Dầu hào', unit: '15g'},
        {name: 'Muối', unit: '3g'},
        {name: 'Gừng', unit: '10g'},
        {name: 'Nước cốt me', unit: '30ml'}
      ],
      step: [
        { 
          id: 1,
          photo: [],
          description: "Thịt gà mua về rửa sạch, chặt thành từng miếng vừa ăn. Ướp thịt gà cùng 20gr đường, 5gr hạt nêm, 10gr hành tím băm, 20ml nước mắm, 15gr dầu hào và 20gr tương ớt. Dùng đũa trộn đều gà với gia vị và ướp khoảng 30 phút."
        },
        {
          id: 2,
          photo: [],
          description: "Đun nóng 10ml dầu ăn, cho 20gr đường vào nấu đến khi đường chuyển hơi vàng thì cho tiếp 10gr sả băm, 10gr gừng băm và 10gr tỏi băm vào phi thơm. Sau đó cho gà đã ướp vào xào săn lại."
        },
        { id: 3,
          photo: [],
          description: "Khi gà săn lại, cho tiếp 30ml nước cốt me vào nồi, đậy nắp và kho gà ở lửa nhỏ trong khoảng 20 phút đến khi nước cạn lại, gà thấm gia vị. Sau đó rắc hành lá và tiêu xay lên trên mặt."
        },
        {
          id: 4,
          photo: [],
          description: "Đây là một món ăn mặn nhanh gọn và đơn giản, nhưng hương vị rất thơm ngon hấp dẫn bởi từng miếng thịt gà có màu vàng nâu đẹp mắt, được kho thấm đậm đà cùng vị chua chua ngọt ngọt của me. Lâu lâu thay đổi thực đơn cho cả gia đình đỡ ngán nha, món gà kho me ăn kèm với cơm nóng rất tuyệt đó."
        }
      ]
    },
    {
      recipeId: 2,
      categoryId: 1,
      title: 'Gà hấp mỡ hành',
      photo_url: 'https://media.cooky.vn/recipe/g1/3671/s800x500/recipe3671-636226642037700123.jpg',
      time: '40',
      ingredients: [
        {name: 'Thịt gà', unit: '1/2 con'},
        {name: 'Dầu ăn', unit: '2 muỗng canh'},
        {name: 'Hạt nêm', unit: '1 muỗng cà phê'},
        {name: 'Tiêu', unit: '1 muỗng cà phê'},
        {name: 'Giấm', unit: '1 muỗng canh'},
        {name: 'Hành lá', unit: '100g'},
        {name: 'Gừng', unit: '1/3 củ'},
        {name: 'Muối', unit: '1 muỗng cà phê'},
        {name: 'Rượu trắng', unit: '1 muỗng canh'}
      ],
      step: [
        {id: 1, photo: ['https://media.cooky.vn/recipe/g1/3671/s480x480/recipe3671-prepare-step1-636226645416354057.jpg'], description: 'Thịt gà rửa sạch với 1 muỗng canh giấm và 1 muỗng cà phê muối cho hết mùi hôi. Sau đó thấm khô nước. Rắc đều 1/2 muỗng cà phê muối lên 2 mặt da gà, xoa đều cho thấm gia vị. Tiếp đến cho hạt nêm nêm, tiêu, rượu trắng vào, lại xoa đều lên thịt gà. Ướp như vậy ít nhất 30 phút cho thịt thấm đều. Hành lá rửa sạch, cắt nhỏ, để riêng.'},
        {id: 2, photo: ['https://media.cooky.vn/recipe/g1/3671/s480x480/recipe3671-prepare-step2-636226646201347436.jpg'], description: 'Thịt gà sau khi ngấm gia vị thì cho vào đĩa sâu lòng. Cho nước vào xửng hấp, đun sôi. Cho đĩa thịt gà vào xửng hấp cho đến khi thịt gà chín mềm.'},
        {id: 3, photo: ['https://media.cooky.vn/recipe/g1/3671/s480x480/recipe3671-prepare-step3-636226646986808815.jpg'], description: 'Thịt gà sau khi đã hấp chín bạn lấy ra cho nguội bớt, cắt miếng vừa ăn và xếp ra đĩa. Phần nước gà tiết ra bạn để lát nữa trộn chung với mỡ hành.'},
        {id: 4, photo: ['https://media.cooky.vn/recipe/g1/3671/s300x300/recipe3671-prepare-step4-636226648104394778.jpg'], description: 'Bắc nồi lên bếp cùng với nước mỡ gà (có thể thêm 2 muỗng canh dầu ăn), đun nóng dầu, cho gừng băm nhỏ, hành lá vào, xào sơ qua 1 - 2 phút. Hành vừa chín tới là tắt bếp. Trút hết phần mỡ hành vào đĩa nước hấp thịt gà vừa nãy. Lấy muỗng múc nước mỡ hành rưới lên trên thịt gà là xong rồi.'},
        {id: 5, photo: ['https://media.cooky.vn/recipe/g1/3671/s300x300/recipe3671-prepare-step5-636226648772543952.jpg'], description: 'Thịt gà mềm ngọt tự nhiên, thơm và béo ngậy vị mỡ hành, cách làm đơn giản, mang lại hiệu quả vị giác rất tốt. Các bạn hãy thử làm cho gia đình mình thưởng thức nhé!'}
      ]
    },
    {
      recipeId: 3,
      categoryId: 1,
      title: 'Gà rang muối',
      photo_url: 'https://media.cooky.vn/recipe/g5/49454/s800x500/cooky-recipe-cover-r49454.JPG',
      time: '40',
      ingredients: [
        {name: 'Thịt gà', unit: '500g'},
        {name: 'Tỏi băm', unit: '10g'},
        {name: 'Muối trắng', unit: '1 muỗng canh'},
        {name: 'Gạo', unit: '30g'},
        {name: 'Hành tím băm', unit: '10g'},
        {name: 'Nước tương', unit: '2 muỗng canh'},
        {name: 'Đậu xanh không vỏ', unit: '15g'},
        {name: 'Tiêu', unit: '1/2 muỗng canh'}
      ],
      step: [
        {id: 1, photo: [], description: 'Thịt gà ta mua về rửa sạch, chặt thành miếng vừa ăn. Ướp gà với 10gr hành tím băm, 10gr tỏi băm, 2 muỗng canh nước tương và 1 lòng đỏ trứng gà trong 15 phút cho thấm gia vị.' },
        {id: 2, photo: ['https://media.cooky.vn/recipe/g5/49454/s300x300/recipe49454-cook-step2-637022677020123940.JPG'], description: 'Bắc chảo dầu lên bếp, cho sả và lá chanh cắt sợi vào chiên vàng. Để sả và lá chanh được giòn khi chiên, bạn nhớ phơi khô hoặc thấm khô sả và lá chanh trước khi chiên.'},
        {id: 3, photo: ['https://media.cooky.vn/recipe/g5/49454/s300x300/recipe49454-cook-step3-637022677103130011.JPG'], description: 'Thịt gà sau khi ướp áo qua lớp bột bắp để khi chiên được giòn hơn. Vẫn chảo dầu đã chiên sả và lá chanh, cho gà vào chiên đến khi vàng đều 2 mặt thì tắt bếp, vớt gà ra giấy thấm dầu để ráo.'},
        {id: 4, photo: ['https://media.cooky.vn/recipe/g5/49454/s300x300/recipe49454-cook-step4-637022677389766593.JPG'], description: 'Bắc chảo lên bếp, cho vào chảo 2 muỗng canh gạo, rang 5 phút trên lửa nhỏ đến khi gạo hơi xém vàng thì cho vào 1 muỗng canh hạt đậu xanh cà vỏ. Rang gạo cùng đậu khoảng 3 phút cho dậy mùi thơm. Kế đến cho vào 1 muỗng canh muối hột và 1/2 muỗng canh tiêu hột, rang thêm 3 phút nữa thì tắt bếp, đem xay nhuyễn hỗn hợp trên.'},
        {id: 5, photo: ['https://media.cooky.vn/recipe/g5/49454/s300x300/recipe49454-cook-step5-637022681945667559.JPG'], description: 'Cho gà vào chảo, rưới muối đã xay nhuyễn áo đều lên gà. Đảo đều trên lửa nhỏ khoảng 3 phút thì tắt bếp.'},
        {id: 6, photo: ['https://media.cooky.vn/recipe/g5/49454/s300x300/recipe49454-cook-step6-637022678077259444.JPG'], description: 'Bày sả chiên lên đĩa, xếp gà đã rang muối lên trên, rải thêm lá chanh và ớt để thêm phần bắt mắt. Hương vị thơm lừng, giòn giòn lạ miệng của thịt gà và hỗn hợp muối rang độc đáo đã tạo nên món gà rang muối thơm ngon khó cưỡng, ăn một lần là nhớ mãi. Đã có công thức rồi, bạn còn chờ gì nữa mà không vào bếp ngay để trổ tài nấu nướng của mình nào!'}
      ]
    },
    {
      recipeId: 4,
      categoryId: 1,
      title: 'Miến gà nấu măng',
      photo_url: 'https://media.cooky.vn/recipe/g2/13417/s800x500/recipe13417-636205234412446662.jpg',
      time: '60',
      ingredients: [
        {name: 'Miến', unit: '200g'},
        {name: 'Măng khô', unit: '50g'},
        {name: 'Hành tím băm', unit: '200g'},
        {name: 'Dầu ăn', unit: '1 muỗng canh'},
        {name: 'Hành lá', unit: '2 cây'},
        {name: 'Ớt', unit: '2 trái'},
        {name: 'Đùi gà', unit: '1 cái'},
        {name: 'Tiêu', unit: '1 muỗng cà phê'},
        {name: 'Hành tím', unit: '2 củ'},
        {name: 'Muối', unit: '200g'},
        {name: 'Hạt nêm', unit: '100g'},
        {name: 'Rau răm', unit: '1/3 nắm'},
        {name: 'Ngò rí', unit: '4 nhánh'}
      ],
      step: [
        {id: 1, photo: ['https://media.cooky.vn/recipe/g2/13417/s300x300/recipe13417-prepare-step1-636205223609525667.jpg'], description: 'Cách nấu miến gà măng tươi: Ngâm măng khô vào nước, để qua đêm cho mềm rồi xả măng qua nước cho sạch đem chần sơ qua nước sôi cho mềm. Vớt măng khô ra, xé sợi nhỏ vừa ăn.' },
        {id: 2, photo: ['https://media.cooky.vn/recipe/g2/13417/s300x300/recipe13417-prepare-step2-636205224704671600.jpg'], description: 'Phi thơm hành tím băm với 1 muỗng canh dầu ăn rồi cho măng vào xào, nêm 1 muỗng cà phê muối, 1 muỗng cà phê tiêu. Đảo đều cho đến khi măng ngấm đều gia vị là được.'},
        {id: 3, photo: ['https://media.cooky.vn/recipe/g2/13417/s300x300/recipe13417-prepare-step3-636205227089965793.jpg'], description: 'Nướng củ hành tím cho thơm rồi lột vỏ, cho vào nước luộc chung với gà giúp nồi nước dùng miến gà nấu măng thơm hương đặc trưng. Thêm đầu hành lá để nước dùng ngọt hơn. Luộc khoảng 30 phút đùi gà chín mềm thì vớt ra, xé sợi.'},
        {id: 4, photo: ['https://media.cooky.vn/recipe/g2/13417/s300x300/recipe13417-prepare-step4-636205229482425997.jpg'], description: 'Nước luộc gà bạn nêm 1/2 muỗng cà phê muối, 1 muỗng cà phê hạt nêm cho vừa ăn rồi thêm măng xào vào.'},
        {id: 5, photo: ['https://media.cooky.vn/recipe/g5/49454/s300x300/recipe49454-cook-step5-637022681945667559.JPG'], description: 'Cho gà vào chảo, rưới muối đã xay nhuyễn áo đều lên gà. Đảo đều trên lửa nhỏ khoảng 3 phút thì tắt bếp.'},
        {id: 6, photo: ['https://media.cooky.vn/recipe/g2/13417/s300x300/recipe13417-prepare-step5-636205231159916945.jpg'], 
        description: 'Cách dùng miến măng gà: Cho miến đã chần nước sôi vào tô, xếp thịt gà lên, chan nước măng, rắc rau răm đã cắt nhỏ, dùng nóng. Tranh thủ thời gian rảnh rỗi cuối tuần, hãy nấu một nồi miến gà nấu măng để đãi cả nhà, vừa ngon, vừa dễ làm, mà lại tốt cho sức khoẻ.'}
      ]
    },
    {
      recipeId: 5,
      categoryId: 1,
      title: 'Miến gà nấu măng',
      photo_url: 'https://media.cooky.vn/recipe/g6/50235/s800x500/cooky-recipe-cover-r50235.jpg',
      time: '30',
      ingredients: [
        {name: 'Ức gà', unit: '100g'},
        {name: 'Dầu hào', unit: '2 muỗng cà phê'},
        {name: 'Ngò tây', unit: '5g'},
        {name: 'Cam', unit: '1/2 quả'},
        {name: 'Muối', unit: '1 muỗng cà phê'},
        {name: 'Bột ớt', unit: '2 muỗng cà phê'},
        {name: 'Tiêu xay', unit: '1 muỗng cà phê'},
        {name: 'Mật ong', unit: '2 muỗng cà phê'},
        {name: 'Phô mai mozzarella', unit: '50g'},
        {name: 'Dầu oliu', unit: '1 muỗng cà phê'},
      ],
      step: [
        {
          id: 1, 
          photo: [
            'https://media.cooky.vn/recipe/g6/50235/s300x300/cooky-recipe-637081553512935892.jpg',
            'https://media.cooky.vn/recipe/g6/50235/s300x300/cooky-recipe-637081555192779493.jpg'
          ], 
          description: '100gr ức gà làm sạch để ráo, cho vào tô trộn đều cùng 1 muỗng cà phê muối, 2 muỗng cà phê mật ong, 1 muỗng cà phê tiêu xay và 2 muỗng cà phê bột ớt Paprika. Ướp trong 5 phút để gia vị thấm đều.' },
        {
          id: 2, 
          photo: ['https://media.cooky.vn/recipe/g6/50235/s300x300/cooky-recipe-637081556309040774.jpg'],
          description: 'Để làm sốt cam, bạn cần 1/2 quả cam vắt lấy nước cốt, thêm 1 muỗng cà phê dầu hào và 1 muỗng cà phê dầu oliu, khuấy đều.'},
        {
          id: 3, 
          photo: [
            'https://media.cooky.vn/recipe/g6/50235/s300x300/cooky-recipe-637081558701764611.jpg',
            'https://media.cooky.vn/recipe/g6/50235/s300x300/cooky-recipe-637081559109440061.jpg',
            'https://media.cooky.vn/recipe/g6/50235/s300x300/cooky-recipe-637081558698483352.jpg',
            'https://media.cooky.vn/recipe/g6/50235/s300x300/cooky-recipe-637081559108815041.jpg' 
          ], 
          description: 'Sau khi gia vị thấm đều ức gà bạn đặt lên khay nướng, rồi phết sốt cam lên trên mặt. Nướng ở nhiệt độ vừa trong 10 phút, bào nhỏ 50gr phô mai Mozzarella và nướng thêm 5 phút. Cuối cùng cho ức gà nướng phô mai ra dĩa, và rắc thêm ngò tây băm nhuyễn.'},
        {
          id: 4, 
          photo: ['https://media.cooky.vn/recipe/g6/50235/s300x300/cooky-recipe-637081561547985230.jpg'], 
          description: 'Món ức gà sôt cam cay nướng phô mai với lớp bên ngoài có béo vị phô mai, vị cay của ớt và chút vị chua của sốt cam đặc biệt món ăn này giúp cho thịt gà không bị khô, khó nuốt như khi chúng ta luộc. Vì vậy, thỉnh thoảng các bạn cũng nên thanh lọc cơ thể cho gia đình bằng bữa ăn với rau xanh, thịt ức gà nướng giòn không dầu mỡ này nhé.'},
      ]
    },
    {
      recipeId: 6,
      categoryId: 2,
      title: 'Thịt kho chả quế',
      photo_url: 'https://media.cooky.vn/recipe/g3/26405/s800x500/recipe-cover-r26405.jpg',
      time: '45',
      ingredients: [
        {name: 'Chả lụa', unit: '300g'},
        {name: 'Tiêu', unit: '1 muỗng canh'},
        {name: 'Hạt nêm', unit: '1 muỗng canh'},
        {name: 'Dầu hào', unit: '1 muỗng canh'},
        {name: 'Hành lá', unit: '2 cây'},
        {name: 'Hành tím', unit: '1 củ'},
        {name: 'Thịt ba chỉ', unit: '300g'},
        {name: 'Đường trắng', unit: '1 muỗng canh'},
        {name: 'Nước dừa', unit: '100 ml'},
        {name: 'Tỏi băm', unit: '2 muỗng cà phê'}
      ],
      step: [
        {
          id: 1, 
          photo: 
          [
            'https://media.cooky.vn/recipe/g3/26405/s300x300/recipe26405-prepare-step1-636506565625089057.jpg',
            'https://media.cooky.vn/recipe/g3/26405/s300x300/recipe26405-prepare-step1-636506565660033119.jpg'
          ], 
          description: 'Chả quế thái miếng. Thịt heo rửa sạch thái miếng vừa ăn. Ướp thịt với 1 muỗng cà phê tiêu, 2 muỗng canh nước mắm, 1 muỗng canh bột nêm, 1 muỗng canh đường, 1 muỗng canh dầu hào, 2 muỗng canh gốc hành lá băm, 2 tép tỏi băm, 1 củ hành tím băm.'},
        {
          id: 2, 
          photo: 
          [
            'https://media.cooky.vn/recipe/g3/26405/s300x300/recipe26405-prepare-step2-636506566013217739.jpg',
            'https://media.cooky.vn/recipe/g3/26405/s300x300/recipe26405-prepare-step2-636506566068441836.jpg'
          ],
          description: 'Đun nóng 1 muỗng canh dầu và đường. Nấu lửa hơi thấp cho đường có màu nâu vàng đẹp thì cho hành lá, tỏi và hành tím băm vào xào thơm. Tiếp đến cho thịt vào xào săn 7 phút. Lúc này thịt ra mỡ, cho chả và các gia vị còn lại vào xào 4 phút.'},
        {
          id: 3, photo: 
          [
            'https://media.cooky.vn/recipe/g3/26405/s300x300/recipe26405-prepare-step3-636506567620488562.jpg',
            'https://media.cooky.vn/recipe/g3/26405/s300x300/recipe26405-prepare-step3-636506567639364595.jpg'
          ], 
          description: 'Thịt gà sau khi đã hấp chín bạn lấy ra cho nguội bớt, cắt miếng vừa ăn và xếp ra đĩa. Phần nước gà tiết ra bạn để lát nữa trộn chung với mỡ hành.'},
        {
          id: 4, photo: 
          ['https://media.cooky.vn/recipe/g3/26405/s300x300/recipe26405-prepare-step4-636506568937442875.jpg'], 
          description: 'Bắc nồi lên bếp cùng với nước mỡ gà (có thể thêm 2 muỗng canh dầu ăn), đun nóng dầu, cho gừng băm nhỏ, hành lá vào, xào sơ qua 1 - 2 phút. Hành vừa chín tới là tắt bếp. Trút hết phần mỡ hành vào đĩa nước hấp thịt gà vừa nãy. Lấy muỗng múc nước mỡ hành rưới lên trên thịt gà là xong rồi.'}
      ]
    },
    {
      recipeId: 7,
      categoryId: 4,
      title: 'Canh cá nấu măng chua',
      photo_url: 'https://media.cooky.vn/recipe/g1/769/s800x500/recipe769-635527877336387266.jpg',
      time: '15',
      ingredients: [
        {name: 'Cá lóc', unit: '300g'},
        {name: 'Hành tím', unit: '2 củ'},
        {name: 'Mỡ heo', unit: '50g'},
        {name: 'Muối', unit: '1/4 muỗng cà phê'},
        {name: 'Hạt nêm', unit: '2 muỗng cà phê'},
        {name: 'Bột ngọt', unit: '1 muỗng cà phê'},
        {name: 'Măng chua', unit: '100g'},
        {name: 'Mắm tôm', unit: '1 muỗng cà phê'},
        {name: 'Ớt bột', unit: '1 muỗng cà phê'},
        {name: 'Tiêu', unit: '1/2 muỗng cà phê'},
        {name: 'Nước mắm', unit: '2 muỗng cà phê'},
        {name: 'Tỏi', unit: '1 muỗng cà phê'}
      ],
      step: [
        {
          id: 1, 
          photo: 
          [
            'https://media.cooky.vn/recipe/g1/769/s300x300/recipe769-cook-step1-635527827201719297.jpg',
            'https://media.cooky.vn/recipe/g1/769/s300x300/recipe769-prepare-step1-637086619952221104.jpg'
          ], 
          description: 'Chả quế thái miếng. Thịt heo rửa sạch thái miếng vừa ăn. Ướp thịt với 1 muỗng cà phê tiêu, 2 muỗng canh nước mắm, 1 muỗng canh bột nêm, 1 muỗng canh đường, 1 muỗng canh dầu hào, 2 muỗng canh gốc hành lá băm, 2 tép tỏi băm, 1 củ hành tím băm.'},
        {
          id: 2, 
          photo: 
          [
            'https://media.cooky.vn/recipe/g1/769/s300x300/recipe769-cook-step3-635527830800957578.jpg',
            'https://media.cooky.vn/recipe/g1/769/s300x300/recipe769-prepare-step2-637086620220972082.JPG'
          ],
          description: 'Hành lá và ớt rửa sạch, để ráo nước và cắt nhỏ. Thái nhỏ cà chua múi cau. Rửa sạch mỡ heo, thấm khô nước, thái nhỏ hạt lựu.'},
        {
          id: 3, 
          photo: 
          [
            'https://media.cooky.vn/recipe/g1/769/s480x480/recipe769-prepare-step1-635527836081475156.jpg',
          ], 
          description: ' Đun nóng chảo, hạ nhỏ lửa và cho mỡ heo và thắng tóp mỡ. Sau khi mỡ đã khô lại thì tắt bếp. Cho mỡ heo ra chén, có thể để riêng mỡ nước và tóp mỡ ra.'},
        {
          id: 4, 
          photo: 
          ['https://media.cooky.vn/recipe/g1/769/s480x480/recipe769-prepare-step2-635527869395430235.jpg'], 
          description: 'Cá nấu măng chua: Đặt tiếp chảo lên bếp, cho vào chảo 2 muỗng cà phê mỡ nước, khi mỡ đã nóng thì hạ lửa nhỏ và cho tỏi băm vào xào khi tỏi có mùi thơm thì cho măng vào xào qua nêm 2 muỗng cà phê nước mắm, 1/2 muỗng cà phê muối và 1 muỗng cà phê mắm tôm sau đó cho 500-600ml nước lọc vào ngập và đun sôi và cho cà chua cắt múi cau vào nấu chung với măng.'
        },
        {
          id: 5, 
          photo: 
          ['https://media.cooky.vn/recipe/g1/769/s480x480/recipe769-prepare-step3-635527875528721250.jpg'], 
          description: 'Cho tiếp cá vào, đậy vung, đun nhỏ lửa sao cho cá nấu măng chua chín mềm nhưng không vỡ nát, măng và cá có mầu trắng, nước canh trong, tỏi vàng và có mùi đặc trưng của măng chua.'
        },
        {
          id: 6, 
          photo: 
          ['https://media.cooky.vn/recipe/g1/769/s480x480/recipe769-prepare-step4-635527877234356016.jpg'], 
          description: 'Nêm nếm nồi canh cá nấu măng chua cho vừa miệng thì tắt bếp và rắc hành lá lên mặt. Món canh cá nấu măng chua ăn cùng với cơm, thịt cá và măng chua chấm nước mắm mặn rất ngon.'
        },        
      ]
    },
    {
      recipeId: 8,
      categoryId: 3,
      title: 'Bò kho',
      photo_url: 'https://media.cooky.vn/recipe/g3/21387/s800x500/cooky-recipe-cover-r21387.jpg',
      time: '1h25',
      ingredients: [
        {name: 'Thịt bò', unit: '400g'},
        {name: 'Rượu trắng', unit: '1 muỗng canh'},
        {name: 'Dầu ăn', unit: '2 muỗng canh'},
        {name: 'Hành tây', unit: '100g'},
        {name: 'Tỏi băm', unit: '15g'},
        {name: 'Bột bắp', unit: '20g'},
        {name: 'Măng chua', unit: '100g'},
        {name: 'Xốt bò kho Barona', unit: '1 gói'},
        {name: 'Cà rốt', unit: '200g'},
        {name: 'Sả', unit: '2 cây'},
        {name: 'Hành tím băm', unit: '15g'},
      ],
      step: [
        {
          id: 1, 
          photo: 
          [
            'https://media.cooky.vn/recipe/g3/21387/s300x300/recipe21387-prepare-step1-636403247949035899.jpg',
          ], 
          description: 'Chuẩn bị và sơ chế các nguyên liệu làm bò kho: Cắt bỏ bớt mỡ thừa của thịt bò rồi rửa sạch, để ráo nước. Rửa sạch cà rốt và hành tây, cà rốt gọt vỏ cắt khối vừa ăn, còn hành tây lột vỏ, cắt miếng vuông hoặc múi cau. Sả cắt khúc ngắn, đập dập; hành tím và tỏi lột vỏ, băm nhuyễn; gừng thái lát. Sơ chế thịt bò: bắc một nồi nước, cho vào 1 muỗng canh rượu trắng và 5gr (3-4 lát) gừng, đun cho nước sôi thì cho thịt bò vào trụng sơ đến khi nước sôi lại thì nhắc xuống. Rửa sạch miếng thịt.'},
        {
          id: 2, 
          photo: 
          [
            'https://media.cooky.vn/recipe/g3/21387/s300x300/recipe21387-prepare-step3-636403247747015544.jpg',
            'https://media.cooky.vn/recipe/g3/21387/s300x300/recipe21387-prepare-step3-636403247747639545.jpg',
          ],
          description: 'Cắt thịt bò ra thành những khối vuông khoảng 5x5cm rồi đem ướp với một gói xốt Bò kho - Xốt gia vị hoàn chỉnh Barona trong 20 phút. Trong sốt gia vị đã được điều chỉnh theo tỷ lệ vừa ăn cho món bò kho ngon thơm rồi nên bạn không cần nêm thêm nữa nhé. Cách nấu bò kho thơm ngon siêu đơn giản là đây chứ đâu.'},
        {
          id: 3, 
          photo: 
          [
            'https://media.cooky.vn/recipe/g3/21387/s300x300/recipe21387-prepare-step4-636403248143568241.jpg',
            'https://media.cooky.vn/recipe/g3/21387/s300x300/recipe21387-prepare-step4-636403248142164238.jpg'
          ], 
          description: 'Bắc nồi lên bếp, cho vào 2 muỗng canh dầu ăn. Gia vị nấu bò kho chỉ đơn giản là cho sả đập dập, hành tím và tỏi băm vào phi cho vàng thơm là dậy mùi rất ngon rồi. Tiếp theo cho thịt bò đã ướp, xào cho thịt bò cho săn lại.'},
        {
          id: 4, 
          photo: 
          [
            'https://media.cooky.vn/recipe/g3/21387/s300x300/recipe21387-prepare-step5-636403248615781070.jpg',
            'https://media.cooky.vn/recipe/g3/21387/s300x300/recipe21387-prepare-step5-636403248617653073.jpg',
            'https://media.cooky.vn/recipe/g3/21387/s300x300/recipe21387-prepare-step5-636403248617029072.jpg'

          ], 
          description: 'Thêm 1.5 lít nước, đun cho nước sôi thì hạ lửa nhỏ hầm tiếp 1 tiếng 30 phút cho thịt bò mềm. Sau đó thêm cà rốt, hầm lửa nhỏ 40 phút. Tiếp theo cho hành tây, nấu thêm 5 phút nữa.'
        },
        {
          id: 5, 
          photo: 
          ['https://media.cooky.vn/recipe/g3/21387/s300x300/recipe21387-prepare-step6-636403250149419764.jpg'], 
          description: 'Pha sẵn một chén có 20gr bột bắp và 50ml nước. Khi hành tây chín, đổ nước bột bắp vào, khuấy đều trên bếp khoảng 1-2 phút nữa đến khi thấy nước bò kho sệt lại là hoàn tất. Tắt bếp và thưởng thức món ngon từ bò này thôi!'
        },
        {
          id: 6, 
          photo: 
          ['https://media.cooky.vn/recipe/g3/21387/s300x300/recipe21387-prepare-step7-636403250629744608.jpg'], 
          description: 'Bò kho là món ăn được nhiều người Việt Nam ưa chuộng bởi sự đậm đà, dễ ăn, nấu trong bếp thôi mà mùi bò kho đã thơm nức tận ngoài cổng. Hãy bỏ túi ngay cách làm bò kho đơn giản tại nhà này nhé! Chỉ cần kết hợp thêm cơm trắng, bánh mì nữa thôi là có bữa sáng đủ chất cho cả nhà rồi. Chắc chắn ai ai cũng ngợi khen tài nấu nướng của bạn cho xem.'
        },        
      ]
    },
    {
      recipeId: 9,
      categoryId: 5,
      title: 'Gỏi rau muống đậu phộng',
      photo_url: 'https://media.cooky.vn/recipe/g2/18459/s800x500/recipe18459-636141058312870494.jpg',
      time: '20',
      ingredients: [
        {name: 'Rau muống', unit: '1 mớ'},
        {name: 'Đậu phộng', unit: '100g'},
        {name: 'Nước mắm', unit: '1 muỗng canh'},
        {name: 'Nước cốt chanh', unit: '2 quả'},
        {name: 'Ớt', unit: '3 trái'},
        {name: 'Đường trắng', unit: '1 muỗng canh'},
        {name: 'Nước', unit: '1 muỗng canh'},
        {name: 'Mè trắng', unit: '30g'},
      ],
      step: [
        {
          id: 1, 
          photo: ['https://media.cooky.vn/recipe/g2/18459/s480x480/cooky-recipe-636138412320463054.JPG'], 
          description: 'Rau một mớ nhặt sạch và bỏ bớt lá, ngâm nước muối loãng 15 phút rồi vớt ra để ráo.'},
        {
          id: 2, 
          photo: ['https://media.cooky.vn/recipe/g2/18459/s300x300/cooky-recipe-636138413754573573.JPG'], 
          description: 'Đun sôi 1 nồi nước với 1 muỗng cà phê muối cho rau vào luộc chín tới dưới mức lửa lớn nhất và đảo nhanh tay nhiều lần để rau được xanh và chín đều. Muốn rau giòn thì luộc chín rồi ngâm rau 5-7 phút với nước lọc đá.'},
        {
          id: 3, 
          photo: ['https://media.cooky.vn/recipe/g2/18459/s300x300/cooky-recipe-636138414262354465.JPG'], 
          description: 'Ớt tươi vài trái , cắt sợi. Đậu phộng rang có thể giã nhỏ hoặc để tuỳ thích. Mè rang chín 1 muỗng cà phê. Hỗn hợp nước dùng gỏi rau gồm (1 muỗng canh nước mắm, đường, nước lọc và nước cốt 2 trái chanh). Cho rau vào thau đổ hỗn hợp nước gỏi sau đó trộn đều. Tiếp theo là cho đậu phộng rang, ớt cắt sợi và mè vào. Trộn đều để rau thấm và ăn.'
        },
      ]
    },
    {
      recipeId: 10,
      categoryId: 5,
      title: 'Đậu hũ kho nấm rơm',
      photo_url: 'https://media.cooky.vn/recipe/g2/15766/s800x500/recipe15766-635811212928542922.jpg',
      time: '30',
      ingredients: [
        {name: 'Đậu hũ non ', unit: '2 miếng'},
        {name: 'Hành boa rô', unit: '100g'},
        {name: 'Nước tương', unit: '1 muỗng canh'},
        {name: 'Hạt nêm chay', unit: '1 muỗng cà phê'},
        {name: 'Nấm rơm', unit: '150g'},
        {name: 'Ớt', unit: '1 trái'},
        {name: 'Muối', unit: '1/2 muỗng cà phê'},
        {name: 'Dầu ăn', unit: '4 muỗng canh'},
      ],
      step: [
        {
          id: 1, 
          photo: ['https://media.cooky.vn/recipe/g2/15766/s300x300/recipe15766-prepare-step1-635811215460895370.jpg'], 
          description: 'Nấm rơm cắt bỏ gốc, ngâm vào nước vo gạo khoảng 3 phút, rửa lại với nước. Sau đó, khứa chữ thập lên búp nấm.'},
        {
          id: 2, 
          photo: ['https://media.cooky.vn/recipe/g2/15766/s300x300/recipe15766-prepare-step2-635811215922500181.jpg'], 
          description: 'Đậu hũ non rửa sạch, cắt miếng vuông nhỏ, cho vào chảo dầu ăn chiên vàng giòn. Hành boa rô cắt nhỏ.'},
        {
          id: 3, 
          photo: ['https://media.cooky.vn/recipe/g2/15766/s480x480/recipe15766-prepare-step3-635811217604963136.jpg'], 
          description: 'Làm nóng 2 muỗng canh dầu ăn trong nồi đất, cho đậu hũ non, hành boa rô, 1/2 muỗng cà phê muối, 1 muỗng canh nước tương, 1 muỗng cà phê hạt nêm chay vào, đảo đều 3 phút.'
        },
        {
          id: 4, 
          photo: ['https://media.cooky.vn/recipe/g2/15766/s480x480/recipe15766-prepare-step4-635811217975619787.jpg'], 
          description: 'Cuối cùng, cho đậu hũ non, ớt vào, nấu thêm 3 phút là được.'
        },
        {
          id: 5, 
          photo: ['https://media.cooky.vn/recipe/g2/15766/s480x480/recipe15766-prepare-step5-635811218116644035.jpg'], 
          description: 'Bày món ăn ra đĩa, trang trí tùy thích và dùng ngay với cơm nóng.'
        },
      ]
    },
    {
      recipeId: 11,
      categoryId: 6,
      title: 'Canh bắp cải cà chua',
      photo_url: 'https://media.cooky.vn/recipe/g2/16592/s800x500/recipe16592-635918175064879117.jpg',
      time: '25',
      ingredients: [
        {name: 'Bắp cải', unit: '200g'},
        {name: 'Dầu ăn', unit: '2 muỗng canh'},
        {name: 'Muối', unit: '1 muỗng cà phê'},
        {name: 'Cà chua', unit: '3 trái'},
        {name: 'Hành tím băm', unit: '1 muỗng canh'},
        {name: 'Hạt nêm chay', unit: '1 muỗng cà phê'},
      ],
      step: [
        {
          id: 1, 
          photo: ['https://media.cooky.vn/recipe/g2/16592/s300x300/recipe16592-cook-step1-636618764313015246.jpg', 'https://media.cooky.vn/recipe/g2/16592/s300x300/recipe16592-cook-step1-636618764177607009.png'], 
          description: 'Bắp cải cắt nhỏ, rửa sạch. Cà chua rửa sạch, cắt múi cau. Phi thơm hành tím băm với 2 muỗng canh dầu ăn. Cho cà chua vào, đảo đều 1 phút.'},
        {
          id: 2, 
          photo: ['https://media.cooky.vn/recipe/g2/16592/s480x480/recipe16592-cook-step3-636618762699972413.jpg'], 
          description: 'Đổ 500ml nước vào nồi, nấu sôi. Khi nước sôi, cho bắp cải vào, nấu sôi lại là được. Nêm gia vị 1 muỗng cà phê muối, 1 muỗng cà phê hạt nêm chay cho vừa ăn.'},
        {
          id: 3, 
          photo: ['https://media.cooky.vn/recipe/g2/16592/s480x480/recipe16592-prepare-step4-635918183367369700.jpg'], 
          description: 'Tắt bếp, múc canh bắp cải ra tô, để hơi nguội và ăn ngay với cơm nhé! Có cách nấu canh bắp cải cà chua này rồi, chắc chắn bữa cơm nhà sẽ bổ dưỡng và tiết kiệm hơn nhiều lắm đó.'
        },
      ]
    },
  ];