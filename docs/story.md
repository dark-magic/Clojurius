# Background Story
You are the godfather of a young clojurius aka wizard named Ron.
He is trapped inside a dark forest with loads of magical creatures. 
The dark forest is cursed and therefore when entering it you forget all spells you know.
You however found a way to communicate with Ron.
Teach him the spells he will need to get out of the forest and past the creatures safely.
Remember, the forest is cursed so your connection to him will not always be stable.

## Stages
- sequential
- multiple paths
- one big journey out of the forest
- levels are checkpoint
- level interaction with creatures / puzzles
- code during / before the level?

## Creatures
- can do actions
- might drop an item 
  (editor feature, information on the upcoming levels, additional spells, in game items)
- might allow you to trade
- might introduce side quests
- apply temporary effects/curses

## How do interactions work / How do spells work
- turn based
  - enemies and Ron fight in turns
- each spell is a function
  - time complexity of the code defines the amount of turns it takes to cast

- You code
  - a set of functions (spells)
    - can do various things like 
      - apply effects on enemies
      - discover information
      - deal damage
      - apply buffs on yourself

    - spell execution:
      - spell gets called with Rons state
      - spell returns a specific wished effect
      - the game applies the wishhed effect on the target
        -  the game takes buffs and debuffs of the target into concideration
      - game state is updated and the animation is played
  - spell casting strategy
    - which choose which spells to apply when
    - the brain of Ron
    - reducer
      - gets the game state
      - returns the spell/actions it wishes to apply
      - game verifies the actions


# Example Run
- Register User
- Choose a difficulty
- See an animation introducing us to the background story
- The first 1-3 spells are explained
- Each Level
  - You continue your journey by going to next stage
  - Just out of range of the next stage you gather information on whats hiding there
  - Prepare for the interaction by creating spells and a strategy + using items
  - Interaction gameplay
    - Interrupt gameplay to use an item
  - Defeat the creatures and pick up the dropped items
  - You can change your spells and strategy as well as using items

- When you die/fail/lose
  - The game resets to before the interaction
  - You get all your items back and lose gained items
  - You have to complete the stage again
    - but now you know the exact enemies, so it should be easier
  - affects your score
