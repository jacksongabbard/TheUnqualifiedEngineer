import itertools

def findDinnerParty(friends, tableSize):
  groups = combineFriends(friends, tableSize) 
  print "%d groups" % len(groups)
  print groups
    
recursions = 0;
def combineFriends(friends, tableSize, groups=[], group=[], pos=0):
  global recursions
  recursions = recursions + 1
  if len(group) == tableSize:
    groups.append(group)
  elif pos < len(friends):
    # skip
    combineFriends(friends, tableSize, groups, group, pos + 1)

    # take
    newGroup = list(group)
    newGroup.append(friends[pos]) 
    combineFriends(friends, tableSize, groups, newGroup, pos + 1)
    
  return groups


friends = ['Fred', 'Paresh', 'Tom', 'Greenie', 'April', 'Dick', 'Harry', 'Lucifer']
findDinnerParty(friends, 8)
  
print "Btw, here's how much recurses, lol %d" % recursions




