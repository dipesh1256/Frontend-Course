#include <stdio.h>

int main() 
{
    
    int r,c;
    
    printf("Enter the size of Row : ");
    scanf("%d",&r);

    printf("Enter the size of collume: ");
    scanf("%d",&c);
	
	printf("\n");


    int  A[r][c];
    int B[r][c];

	
    for (int i = 0; i < r; i++) 
		{
			for (int j = 0; j < c; j++)
			{
				printf(" ENTER THE VALUE OF ARRAY :");
				scanf("%d",&A[i][j]);
			}
		}
		
		
		for (int i = 0; i < r; i++) 
		{
			for (int j = 0; j < c; j++)
			{
				printf(" ENTER THE VALUE OF ARRAY :");
				scanf("%d",&B[i][j]);
			}
		}
		
		printf("\n");


	// for 1 to 9

    printf("Array=1:\tArray=2: \tTotal Array:\n");
    for (int i = 0; i < r; i++) 
		{
			for (int j = 0; j < c; j++)
			{
				printf("%d ", A[i][j]);
			}
			
			// for 10 to 18
			printf("\t\t");
			
		           	for (int j = 0; j < c; j++)
		        	{
			        	printf("%d ",B[i][j]);
		        	}
		
		
		
		//for total
		
        printf("\t\t");
         for (int j = 0; j < c; j++)
			{
				printf("%d ", A[i][j] + B[i][j]);
			}	     printf("\n");
		}

   
    return 0;
}

/*
Enter the size of Row : 3
Enter the size of collume: 3

 ENTER THE VALUE OF ARRAY :1
 ENTER THE VALUE OF ARRAY :2
 ENTER THE VALUE OF ARRAY :3
 ENTER THE VALUE OF ARRAY :4
 ENTER THE VALUE OF ARRAY :5
 ENTER THE VALUE OF ARRAY :6
 ENTER THE VALUE OF ARRAY :7
 ENTER THE VALUE OF ARRAY :8
 ENTER THE VALUE OF ARRAY :9
 ENTER THE VALUE OF ARRAY :10
 ENTER THE VALUE OF ARRAY :11
 ENTER THE VALUE OF ARRAY :12
 ENTER THE VALUE OF ARRAY :13
 ENTER THE VALUE OF ARRAY :14
 ENTER THE VALUE OF ARRAY :15
 ENTER THE VALUE OF ARRAY :16
 ENTER THE VALUE OF ARRAY :17
 ENTER THE VALUE OF ARRAY :18
 
Array=1:        Array=2:        Total Array:
1 2 3           10 11 12        11 13 15
4 5 6           13 14 15        17 19 21
7 8 9           16 17 18        23 25 27
	


*/

