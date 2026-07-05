//Check if two arrays are equal.

import java.util.*;

class Solution_6{
  public static void main(String[] args){
    int[] arr1 = {1,2,3,4};
    int[] arr2 = {4,3,2,1};

    if(arr1.length != arr2.length){
      System.out.println(false);
      return;
    }

    HashMap<Integer , Integer> map = new HashMap<>();

    for(int num: arr1){
      map.put(num,map.getOrDefault(num,0)+1);
    }
    for(int num : arr2){
      if(!map.containsKey(num)){
        System.out.println(false);
        return;
      }
      map.put(num, map.get(num)-1);

      if(map.get(num)==0){
        map.remove(num);
      }
    }
    System.out.println(map.isEmpty());
  }
}