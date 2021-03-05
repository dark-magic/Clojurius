## Stage
- Name
- Type
  - Combat
  - Puzzle
  - Side Quest Opportunity
  - Trader
  - Runefarer (can investigate the spells inside runes)
  - Effect / Curse
- Scene (Structure / Landscape / Setting) 
- Creatures
- Rewards
- Connection to other Stages (prev / next)


## Creature
- Name
- Stats
- Spells


### Character (instance of Creature)
- Type
- Name
- Level


## Player
- Name
- Difficulty
- Current Stage
- Items
- Effects / Curses
- Stats
- Learned Info
- Spells
- Spellcasting Strategy


## Spell
- Name
- Code
- Created At (Stage)
- Accuracy (based on code complexity)
- Cast time (based on time complexity of the code)
- Number of casts


## Stats
- Health
- Strength (base damage for all spells)
- Resistance 
  - (enemy attack damage - resistence = damage taken, or at least something along those lines) 
- Accuracy (increases chance of the spell to be successfull)
- Skill (increases spell cast speed)
- Intelligence (limit nr of spells)
- Luck (for lucky encounters like effects/curses and idk what)


## Effects / Curses
- Scared (reduce the accurracy of your spells)
- Blindness (reduces the targets you can choose to attack)
- Drunk (changes the behaviour of spells by changing the behaviour of predefined functions)
- Lucky (increased Luck)
- Entangled (reduces cast speed)
- Poisoned (deals x damage over y time)
- Brave (increases resistance)
- Confused (removes a spell)
- Enlightened (increases cast speed & learns a new spell)
- Hyped (increases strength and cast speed, reduced resistance)


## Items
- Spell (Teach you clojure)
- Potion (Temporarily increases a player stat)
- Rune (Contains an unknown Spell which can be activated once)
- Hourglass (stop time and edit your spells / spellcasting strategy)
- Food (restores health, might have a small temporary effect)
- IDE features (hypercomplete writes spells for us)
