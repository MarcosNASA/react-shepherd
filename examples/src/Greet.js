import * as React from 'react'

import { useShepherd, Flock, Sheep } from 'js-shepherd'

export const Greet = () => {
  const {
    goNextSheep,
    goPreviousSheep,
    shepherd: { activeSheep },
    closeFarmyard,
    openFarmyard,
  } = useShepherd()
  const greetRef = React.useRef()
  const farewellRef = React.useRef()

  return (
    <>
      <div>
        <p>{activeSheep}</p>
        <button onClick={openFarmyard}>Restart</button>
        <button onClick={goPreviousSheep}>Previous</button>
        <button onClick={goNextSheep}>Next</button>
        <button onClick={closeFarmyard}>End</button>
      </div>
      <h2 ref={greetRef}>Hello, world!</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis ipsum non convallis semper. Proin
        scelerisque volutpat enim, eget hendrerit neque tincidunt sed. In imperdiet nibh vitae justo consectetur tempor.
        Proin mollis risus id sollicitudin blandit. Donec at tellus sed mauris tincidunt egestas. Nunc feugiat ipsum
        vitae ipsum cursus, nec hendrerit felis maximus. Nunc ut fringilla lacus, in semper diam. Integer mattis, massa
        sit amet fermentum porttitor, magna leo molestie quam, a porttitor velit quam efficitur sapien. Pellentesque
        eleifend neque a urna iaculis, non volutpat felis auctor. Aliquam egestas sapien eu diam placerat, sed commodo
        justo imperdiet. Sed bibendum risus quis erat fermentum, facilisis bibendum elit cursus. Donec aliquet, lectus
        eu rutrum gravida, augue elit cursus leo, sed consequat lacus dolor vel est. Nulla pretium nunc ac augue
        porttitor ullamcorper. Cras cursus leo non urna rhoncus porta. Quisque vulputate pellentesque tempor. Mauris
        augue est, interdum quis lectus a, feugiat ullamcorper erat. Suspendisse placerat odio quis posuere laoreet. In
        hac habitasse platea dictumst. Praesent mauris ligula, accumsan et vestibulum non, tempus at lorem. Pellentesque
        vehicula accumsan metus, imperdiet pharetra odio fermentum id. Vivamus et vehicula massa. Maecenas vitae sem sit
        amet lectus volutpat congue eu id dolor. Sed luctus arcu quis tellus auctor dictum. Aliquam sit amet euismod
        nisi. Morbi scelerisque arcu non rhoncus fringilla. Praesent auctor egestas metus quis consequat. Proin interdum
        nulla justo, ac blandit elit pretium placerat. Proin gravida magna nunc, eu pulvinar leo tincidunt eu.
        Vestibulum efficitur pretium magna, vitae accumsan dolor dictum sed. Ut felis ligula, tristique et arcu quis,
        ultrices suscipit quam. Donec tristique sapien at consectetur eleifend. In erat ante, porttitor in dui et,
        aliquet tempus lorem. Sed convallis quam eu risus varius euismod. Nam vitae rhoncus dolor. Integer risus lorem,
        vestibulum at blandit vitae, convallis eget nunc. Duis pulvinar ac augue vel molestie. Donec lectus justo,
        pellentesque et ullamcorper vitae, mattis at sapien. Nunc efficitur at dolor nec efficitur. Nam nec nibh eget
        magna luctus mattis et iaculis enim. Etiam ut felis suscipit, ullamcorper risus et, venenatis arcu. Ut ornare
        congue facilisis. Duis rutrum libero at nulla sagittis, et volutpat sapien malesuada. Phasellus erat libero,
        faucibus porttitor nibh id, egestas porttitor arcu. Ut elementum eleifend ipsum, vitae varius sem vestibulum id.
        Vestibulum suscipit malesuada ligula quis consectetur. Morbi aliquam felis ligula. Nulla quis mollis ex, vitae
        accumsan tellus. Mauris tristique varius orci, vitae ullamcorper quam dictum eget. Duis fermentum consectetur
        felis in condimentum. Vestibulum non suscipit dui, ut sagittis quam. Sed non quam non quam gravida vestibulum
        non sed mauris. Nullam tempor dui eu neque congue venenatis elementum id velit. Donec feugiat molestie magna,
        non varius lorem laoreet nec. Vivamus luctus tempus urna. Suspendisse efficitur felis sed velit malesuada, eget
        interdum lorem luctus. Fusce finibus, orci posuere suscipit condimentum, lorem lorem euismod tortor,
        sollicitudin vehicula mi quam non diam. Proin dictum tellus eu nunc rhoncus sollicitudin. Curabitur consequat,
        nibh molestie faucibus faucibus, metus odio luctus orci, vel pulvinar massa lectus eu ex. Vivamus porttitor
        augue orci, ac ullamcorper sem tincidunt vitae. Nullam ullamcorper, erat a elementum iaculis, justo sapien
        varius tortor, at dignissim urna felis vel ipsum. In mollis placerat massa quis aliquet.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis ipsum non convallis semper. Proin
        scelerisque volutpat enim, eget hendrerit neque tincidunt sed. In imperdiet nibh vitae justo consectetur tempor.
        Proin mollis risus id sollicitudin blandit. Donec at tellus sed mauris tincidunt egestas. Nunc feugiat ipsum
        vitae ipsum cursus, nec hendrerit felis maximus. Nunc ut fringilla lacus, in semper diam. Integer mattis, massa
        sit amet fermentum porttitor, magna leo molestie quam, a porttitor velit quam efficitur sapien. Pellentesque
        eleifend neque a urna iaculis, non volutpat felis auctor. Aliquam egestas sapien eu diam placerat, sed commodo
        justo imperdiet. Sed bibendum risus quis erat fermentum, facilisis bibendum elit cursus. Donec aliquet, lectus
        eu rutrum gravida, augue elit cursus leo, sed consequat lacus dolor vel est. Nulla pretium nunc ac augue
        porttitor ullamcorper. Cras cursus leo non urna rhoncus porta. Quisque vulputate pellentesque tempor. Mauris
        augue est, interdum quis lectus a, feugiat ullamcorper erat. Suspendisse placerat odio quis posuere laoreet. In
        hac habitasse platea dictumst. Praesent mauris ligula, accumsan et vestibulum non, tempus at lorem. Pellentesque
        vehicula accumsan metus, imperdiet pharetra odio fermentum id. Vivamus et vehicula massa. Maecenas vitae sem sit
        amet lectus volutpat congue eu id dolor. Sed luctus arcu quis tellus auctor dictum. Aliquam sit amet euismod
        nisi. Morbi scelerisque arcu non rhoncus fringilla. Praesent auctor egestas metus quis consequat. Proin interdum
        nulla justo, ac blandit elit pretium placerat. Proin gravida magna nunc, eu pulvinar leo tincidunt eu.
        Vestibulum efficitur pretium magna, vitae accumsan dolor dictum sed. Ut felis ligula, tristique et arcu quis,
        ultrices suscipit quam. Donec tristique sapien at consectetur eleifend. In erat ante, porttitor in dui et,
        aliquet tempus lorem. Sed convallis quam eu risus varius euismod. Nam vitae rhoncus dolor. Integer risus lorem,
        vestibulum at blandit vitae, convallis eget nunc. Duis pulvinar ac augue vel molestie. Donec lectus justo,
        pellentesque et ullamcorper vitae, mattis at sapien. Nunc efficitur at dolor nec efficitur. Nam nec nibh eget
        magna luctus mattis et iaculis enim. Etiam ut felis suscipit, ullamcorper risus et, venenatis arcu. Ut ornare
        congue facilisis. Duis rutrum libero at nulla sagittis, et volutpat sapien malesuada. Phasellus erat libero,
        faucibus porttitor nibh id, egestas porttitor arcu. Ut elementum eleifend ipsum, vitae varius sem vestibulum id.
        Vestibulum suscipit malesuada ligula quis consectetur. Morbi aliquam felis ligula. Nulla quis mollis ex, vitae
        accumsan tellus. Mauris tristique varius orci, vitae ullamcorper quam dictum eget. Duis fermentum consectetur
        felis in condimentum. Vestibulum non suscipit dui, ut sagittis quam. Sed non quam non quam gravida vestibulum
        non sed mauris. Nullam tempor dui eu neque congue venenatis elementum id velit. Donec feugiat molestie magna,
        non varius lorem laoreet nec. Vivamus luctus tempus urna. Suspendisse efficitur felis sed velit malesuada, eget
        interdum lorem luctus. Fusce finibus, orci posuere suscipit condimentum, lorem lorem euismod tortor,
        sollicitudin vehicula mi quam non diam. Proin dictum tellus eu nunc rhoncus sollicitudin. Curabitur consequat,
        nibh molestie faucibus faucibus, metus odio luctus orci, vel pulvinar massa lectus eu ex. Vivamus porttitor
        augue orci, ac ullamcorper sem tincidunt vitae. Nullam ullamcorper, erat a elementum iaculis, justo sapien
        varius tortor, at dignissim urna felis vel ipsum. In mollis placerat massa quis aliquet.
      </p>

      <h2 ref={farewellRef}>Bye, world!</h2>

      <Flock>
        <Sheep spotRef={greetRef} number={1}>
          {({ closeFarmyard, getSheepProps, goNextSheep, goPreviousSheep }) => (
            <div
              {...getSheepProps({
                style: {
                  background: '#eee',
                  padding: '20px 10px',
                },
              })}
            >
              <p>Tut start!</p>
              <div>
                <button onClick={goPreviousSheep}>Previous</button>
                <button onClick={closeFarmyard}>Skip</button>
                <button onClick={goNextSheep}>Next</button>
              </div>
            </div>
          )}
        </Sheep>

        <Sheep spotRef={farewellRef} number={0}>
          {({ closeFarmyard, getSheepProps, goPreviousSheep, goNextSheep }) => (
            <div
              {...getSheepProps({
                style: {
                  background: '#eee',
                  padding: '10px 20px',
                },
              })}
            >
              <p>Tut end!</p>
              <div>
                <button onClick={goPreviousSheep}>Previous</button>
                <button onClick={closeFarmyard}>End</button>
                <button onClick={goNextSheep}>Next</button>
              </div>
            </div>
          )}
        </Sheep>
      </Flock>
    </>
  )
}
