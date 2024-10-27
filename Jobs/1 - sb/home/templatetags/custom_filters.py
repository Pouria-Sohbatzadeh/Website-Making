from django import template

register = template.Library()

@register.filter
def range_filter(value, default=0):
    """فیلتر سفارشی برای تولید لیست از 0 تا مقدار داده شده یا مقدار پیش‌فرض"""
    try:
        # استفاده از مقدار پیش‌فرض اگر مقدار داده شده خالی باشد
        upper_limit = int(value) if value is not None else default
        return range(upper_limit)
    except (ValueError, TypeError):
        return range(default)
