// Count frequency of elements. 

import java.util.*;

class Solution_3{
  public static void main(String[] args){
    int arr[] = {1,2,2,3,1,2};

    HashMap<Integer , Integer> map = new HashMap<>();

    for(int num: arr){
      if(map.containsKey(num)){
        map.put(num,map.get(num)+1);
      } else{
        map.put(num,1);
      }
    }
    System.out.println(map);
  }
}