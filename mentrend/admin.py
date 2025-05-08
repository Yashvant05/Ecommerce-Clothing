from django.contrib import admin
from django.contrib.auth.models import User
from .models import Order

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('user', 'product_name', 'quantity', 'total_price', 'created_at')
    search_fields = ('user__username', 'product_name', 'address')
    list_filter = ('created_at',)

        # Custom actions
    actions = ['mark_as_shipped']

    # Custom action function
    def mark_as_shipped(self, request, queryset):
        
        for order in queryset:
            print(f"Marking order ID {order.id} as shipped...")  # or update a field
        self.message_user(request, "Selected orders marked as shipped.")
    
    # Name shown in the dropdown
    mark_as_shipped.short_description = "Mark selected orders as shipped"