#include <iostream>
using  namespace std;
int main()
{
    int i, j;

    for (i = 5; i >= 1; i--)
    {
        for (j = 1; j <= 5-i; j++)
        {
            cout <<" ";
        }
        
        for (j = 1; j <= i; j++)
        {
            if(j==1 || j==i || i==5){
            cout <<"* ";
            }else{
            cout <<"  ";
            }
        }
        cout <<"\n";
    }
    
}



/*

* * * * * 
 *     * 
  *   * 
   * * 
    * 

*/