#include <iostream>
using namespace std;

class Box
{
public:
    int l, b, h;
    void SetData(int x, int y, int z)
    {
        l = x, b = y, h = z;
    }
    int getVolume()
    {
        return l * b * h;
    }
    Box operator+(Box &n)
    {
        Box p;
        p.l = l + n.l;
        p.b = b + n.b;
        p.h = h + n.h;

        return p;
    }
};


int main()
{
    Box t, z, a;

    t.SetData(3,3,3);
    cout <<"Volume of Box T is: " <<t.getVolume() <<endl;

    z.SetData(4,4,4);
    cout <<"Volume of Box Z is: " <<z.getVolume() <<endl;

    a= t + z;
    cout <<"Volume of Box A is: " <<a.getVolume() <<endl;
}



/*

Volume of Box T is: 27
Volume of Box Z is: 64
Volume of Box A is: 343

*/