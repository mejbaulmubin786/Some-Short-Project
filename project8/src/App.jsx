import React from 'react'

import Card from './components/card'

const App = () => {
  return (
    <>
      <Card design="main" title="This is One" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quod, atque eaque porro culpa ea, earum ab, accusantium laudantium explicabo minima neque nobis voluptatibus odit illum natus cupiditate amet" buttonText="This is One" type="true"/> 
      <Card design="main designTwo" title="This is Two" text="quia eos pariatur ratione error omnis unde perspiciatis impedit ea praesentium deserunt accusantium ipsa, nihil quasi labore sequi, aliquid, blanditiis minus quae provident neque iure? Aspernatur" buttonText="This is Two" />
      <Card design="main designThree" title="This is Three" text="asperiores aspernatur in commodi, provident natus mollitia repellendus impedit laudantium ipsum porro suscipit nisi harum. Sint nemo animi dolore reiciendis quas impedit corporis, nesciunt veritatis inventore dicta placeat odio fugit consequuntur odit suscipit voluptates! Doloremque, reiciendis." buttonText="This is Three" type="true"/>
      <Card design="main designFour" title="This is Four" text="Exercitationem dignissimos hic, quas vel nisi repellat provident voluptate deserunt fugiat. Rem a repudiandae tempora aliquid quia veritatis deserunt eveniet, autem sequi aliquam iure magni esse cupiditate nobis quod modi at fuga? Facere quam incidunt eveniet" buttonText="This is Four" type="true"/>
      <Card design="main designFive" title="This is Five" text="Tempore incidunt qui illum facere non voluptas quos sequi, numquam omnis optio rem minima consectetur alias. Optio placeat dignissimos commodi accusantium quas." buttonText="This is Five" type="false"/>
    </>
  )
}

export default App